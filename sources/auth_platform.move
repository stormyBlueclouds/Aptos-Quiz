module auth_platform::auth_platform {

    use std::signer;
    use std::string;
    use std::table;

    /// A struct to store user data.
    struct User has copy, drop, store {
        username: string::String,
        registered_at: u64,
    }

    /// Table to map a user's address to their user info
    struct UserRegistry has key {
        users: table::Table<address, User>,
    }

    /// Initializes the user registry - should only be called once by deployer
    public entry fun init_registry(admin: &signer) {
        move_to(admin, UserRegistry {
            users: table::new<address, User>(),
        });
    }

    /// Register a new user with a username
    public entry fun register_user(admin: &signer, user: &signer, username: string::String) acquires UserRegistry {
        let registry = borrow_global_mut<UserRegistry>(signer::address_of(admin));
        let addr = signer::address_of(user);

        // Create user struct
        let user = User {
            username,
            registered_at: 0, // optional: replace with timestamp logic if needed
        };

        // Insert into table
        table::add(&mut registry.users, addr, user);
    }

    /// Get a user by address (used off-chain or via view function)
    public fun get_user(registry_addr: address, user_addr: address): User acquires UserRegistry {
        let registry = borrow_global<UserRegistry>(registry_addr);
        *table::borrow(&registry.users, user_addr)
    }

    /// Get the username of a User struct
    public fun get_username(user: &User): string::String {
        user.username
    }
}