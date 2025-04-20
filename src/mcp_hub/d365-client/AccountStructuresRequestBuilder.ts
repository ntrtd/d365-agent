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
import { AccountStructures } from './AccountStructures';
import { DimensionHierarchyConstraintStatus } from './DimensionHierarchyConstraintStatus';

/**
 * Request builder class for operations supported on the {@link AccountStructures} entity.
 */
export class AccountStructuresRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AccountStructures<T>, T> {
  /**
   * Returns a request builder for querying all `AccountStructures` entities.
   * @returns A request builder for creating requests to retrieve all `AccountStructures` entities.
   */
  getAll(): GetAllRequestBuilder<AccountStructures<T>, T> {
    return new GetAllRequestBuilder<AccountStructures<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AccountStructures` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AccountStructures`.
   */
  create(
    entity: AccountStructures<T>
  ): CreateRequestBuilder<AccountStructures<T>, T> {
    return new CreateRequestBuilder<AccountStructures<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AccountStructures` entity based on its keys.
   * @param accountStructureName Key property. See {@link AccountStructures.accountStructureName}.
   * @param status Key property. See {@link AccountStructures.status}.
   * @returns A request builder for creating requests to retrieve one `AccountStructures` entity based on its keys.
   */
  getByKey(
    accountStructureName: DeserializedType<T, 'Edm.String'>,
    status: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.DimensionHierarchyConstraintStatus'
    >
  ): GetByKeyRequestBuilder<AccountStructures<T>, T> {
    return new GetByKeyRequestBuilder<AccountStructures<T>, T>(this.entityApi, {
      AccountStructureName: accountStructureName,
      Status: status
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AccountStructures`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AccountStructures`.
   */
  update(
    entity: AccountStructures<T>
  ): UpdateRequestBuilder<AccountStructures<T>, T> {
    return new UpdateRequestBuilder<AccountStructures<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AccountStructures`.
   * @param accountStructureName Key property. See {@link AccountStructures.accountStructureName}.
   * @param status Key property. See {@link AccountStructures.status}.
   * @returns A request builder for creating requests that delete an entity of type `AccountStructures`.
   */
  delete(
    accountStructureName: string,
    status: DimensionHierarchyConstraintStatus
  ): DeleteRequestBuilder<AccountStructures<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AccountStructures`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AccountStructures` by taking the entity as a parameter.
   */
  delete(
    entity: AccountStructures<T>
  ): DeleteRequestBuilder<AccountStructures<T>, T>;
  delete(
    accountStructureNameOrEntity: any,
    status?: DimensionHierarchyConstraintStatus
  ): DeleteRequestBuilder<AccountStructures<T>, T> {
    return new DeleteRequestBuilder<AccountStructures<T>, T>(
      this.entityApi,
      accountStructureNameOrEntity instanceof AccountStructures
        ? accountStructureNameOrEntity
        : {
            AccountStructureName: accountStructureNameOrEntity!,
            Status: status!
          }
    );
  }
}
