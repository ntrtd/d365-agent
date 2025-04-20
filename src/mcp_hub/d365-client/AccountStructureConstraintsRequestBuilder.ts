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
import { AccountStructureConstraints } from './AccountStructureConstraints';
import { DimensionHierarchyConstraintStatus } from './DimensionHierarchyConstraintStatus';

/**
 * Request builder class for operations supported on the {@link AccountStructureConstraints} entity.
 */
export class AccountStructureConstraintsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AccountStructureConstraints<T>, T> {
  /**
   * Returns a request builder for querying all `AccountStructureConstraints` entities.
   * @returns A request builder for creating requests to retrieve all `AccountStructureConstraints` entities.
   */
  getAll(): GetAllRequestBuilder<AccountStructureConstraints<T>, T> {
    return new GetAllRequestBuilder<AccountStructureConstraints<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AccountStructureConstraints` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AccountStructureConstraints`.
   */
  create(
    entity: AccountStructureConstraints<T>
  ): CreateRequestBuilder<AccountStructureConstraints<T>, T> {
    return new CreateRequestBuilder<AccountStructureConstraints<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AccountStructureConstraints` entity based on its keys.
   * @param accountStructure Key property. See {@link AccountStructureConstraints.accountStructure}.
   * @param status Key property. See {@link AccountStructureConstraints.status}.
   * @param position Key property. See {@link AccountStructureConstraints.position}.
   * @returns A request builder for creating requests to retrieve one `AccountStructureConstraints` entity based on its keys.
   */
  getByKey(
    accountStructure: DeserializedType<T, 'Edm.String'>,
    status: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.DimensionHierarchyConstraintStatus'
    >,
    position: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<AccountStructureConstraints<T>, T> {
    return new GetByKeyRequestBuilder<AccountStructureConstraints<T>, T>(
      this.entityApi,
      {
        AccountStructure: accountStructure,
        Status: status,
        Position: position
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AccountStructureConstraints`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AccountStructureConstraints`.
   */
  update(
    entity: AccountStructureConstraints<T>
  ): UpdateRequestBuilder<AccountStructureConstraints<T>, T> {
    return new UpdateRequestBuilder<AccountStructureConstraints<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AccountStructureConstraints`.
   * @param accountStructure Key property. See {@link AccountStructureConstraints.accountStructure}.
   * @param status Key property. See {@link AccountStructureConstraints.status}.
   * @param position Key property. See {@link AccountStructureConstraints.position}.
   * @returns A request builder for creating requests that delete an entity of type `AccountStructureConstraints`.
   */
  delete(
    accountStructure: string,
    status: DimensionHierarchyConstraintStatus,
    position: number
  ): DeleteRequestBuilder<AccountStructureConstraints<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AccountStructureConstraints`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AccountStructureConstraints` by taking the entity as a parameter.
   */
  delete(
    entity: AccountStructureConstraints<T>
  ): DeleteRequestBuilder<AccountStructureConstraints<T>, T>;
  delete(
    accountStructureOrEntity: any,
    status?: DimensionHierarchyConstraintStatus,
    position?: number
  ): DeleteRequestBuilder<AccountStructureConstraints<T>, T> {
    return new DeleteRequestBuilder<AccountStructureConstraints<T>, T>(
      this.entityApi,
      accountStructureOrEntity instanceof AccountStructureConstraints
        ? accountStructureOrEntity
        : {
            AccountStructure: accountStructureOrEntity!,
            Status: status!,
            Position: position!
          }
    );
  }
}
