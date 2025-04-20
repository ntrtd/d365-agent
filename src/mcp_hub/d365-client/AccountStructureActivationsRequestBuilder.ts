/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { AccountStructureActivations } from './AccountStructureActivations';

/**
 * Request builder class for operations supported on the {@link AccountStructureActivations} entity.
 */
export class AccountStructureActivationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AccountStructureActivations<T>, T> {
  /**
   * Returns a request builder for querying all `AccountStructureActivations` entities.
   * @returns A request builder for creating requests to retrieve all `AccountStructureActivations` entities.
   */
  getAll(): GetAllRequestBuilder<AccountStructureActivations<T>, T> {
    return new GetAllRequestBuilder<AccountStructureActivations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AccountStructureActivations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AccountStructureActivations`.
   */
  create(
    entity: AccountStructureActivations<T>
  ): CreateRequestBuilder<AccountStructureActivations<T>, T> {
    return new CreateRequestBuilder<AccountStructureActivations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AccountStructureActivations` entity based on its keys.
   * @param accountStructure Key property. See {@link AccountStructureActivations.accountStructure}.
   * @returns A request builder for creating requests to retrieve one `AccountStructureActivations` entity based on its keys.
   */
  getByKey(
    accountStructure: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AccountStructureActivations<T>, T> {
    return new GetByKeyRequestBuilder<AccountStructureActivations<T>, T>(
      this.entityApi,
      { AccountStructure: accountStructure }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AccountStructureActivations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AccountStructureActivations`.
   */
  update(
    entity: AccountStructureActivations<T>
  ): UpdateRequestBuilder<AccountStructureActivations<T>, T> {
    return new UpdateRequestBuilder<AccountStructureActivations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AccountStructureActivations`.
   * @param accountStructure Key property. See {@link AccountStructureActivations.accountStructure}.
   * @returns A request builder for creating requests that delete an entity of type `AccountStructureActivations`.
   */
  delete(
    accountStructure: string
  ): DeleteRequestBuilder<AccountStructureActivations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AccountStructureActivations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AccountStructureActivations` by taking the entity as a parameter.
   */
  delete(
    entity: AccountStructureActivations<T>
  ): DeleteRequestBuilder<AccountStructureActivations<T>, T>;
  delete(
    accountStructureOrEntity: any
  ): DeleteRequestBuilder<AccountStructureActivations<T>, T> {
    return new DeleteRequestBuilder<AccountStructureActivations<T>, T>(
      this.entityApi,
      accountStructureOrEntity instanceof AccountStructureActivations
        ? accountStructureOrEntity
        : { AccountStructure: accountStructureOrEntity! }
    );
  }
}
