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
import { LedgerAdvancedRuleStructures } from './LedgerAdvancedRuleStructures';
import { DimensionHierarchyConstraintStatus } from './DimensionHierarchyConstraintStatus';

/**
 * Request builder class for operations supported on the {@link LedgerAdvancedRuleStructures} entity.
 */
export class LedgerAdvancedRuleStructuresRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LedgerAdvancedRuleStructures<T>, T> {
  /**
   * Returns a request builder for querying all `LedgerAdvancedRuleStructures` entities.
   * @returns A request builder for creating requests to retrieve all `LedgerAdvancedRuleStructures` entities.
   */
  getAll(): GetAllRequestBuilder<LedgerAdvancedRuleStructures<T>, T> {
    return new GetAllRequestBuilder<LedgerAdvancedRuleStructures<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LedgerAdvancedRuleStructures` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LedgerAdvancedRuleStructures`.
   */
  create(
    entity: LedgerAdvancedRuleStructures<T>
  ): CreateRequestBuilder<LedgerAdvancedRuleStructures<T>, T> {
    return new CreateRequestBuilder<LedgerAdvancedRuleStructures<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LedgerAdvancedRuleStructures` entity based on its keys.
   * @param accountRuleStructureName Key property. See {@link LedgerAdvancedRuleStructures.accountRuleStructureName}.
   * @param status Key property. See {@link LedgerAdvancedRuleStructures.status}.
   * @returns A request builder for creating requests to retrieve one `LedgerAdvancedRuleStructures` entity based on its keys.
   */
  getByKey(
    accountRuleStructureName: DeserializedType<T, 'Edm.String'>,
    status: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.DimensionHierarchyConstraintStatus'
    >
  ): GetByKeyRequestBuilder<LedgerAdvancedRuleStructures<T>, T> {
    return new GetByKeyRequestBuilder<LedgerAdvancedRuleStructures<T>, T>(
      this.entityApi,
      {
        AccountRuleStructureName: accountRuleStructureName,
        Status: status
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LedgerAdvancedRuleStructures`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LedgerAdvancedRuleStructures`.
   */
  update(
    entity: LedgerAdvancedRuleStructures<T>
  ): UpdateRequestBuilder<LedgerAdvancedRuleStructures<T>, T> {
    return new UpdateRequestBuilder<LedgerAdvancedRuleStructures<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LedgerAdvancedRuleStructures`.
   * @param accountRuleStructureName Key property. See {@link LedgerAdvancedRuleStructures.accountRuleStructureName}.
   * @param status Key property. See {@link LedgerAdvancedRuleStructures.status}.
   * @returns A request builder for creating requests that delete an entity of type `LedgerAdvancedRuleStructures`.
   */
  delete(
    accountRuleStructureName: string,
    status: DimensionHierarchyConstraintStatus
  ): DeleteRequestBuilder<LedgerAdvancedRuleStructures<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LedgerAdvancedRuleStructures`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LedgerAdvancedRuleStructures` by taking the entity as a parameter.
   */
  delete(
    entity: LedgerAdvancedRuleStructures<T>
  ): DeleteRequestBuilder<LedgerAdvancedRuleStructures<T>, T>;
  delete(
    accountRuleStructureNameOrEntity: any,
    status?: DimensionHierarchyConstraintStatus
  ): DeleteRequestBuilder<LedgerAdvancedRuleStructures<T>, T> {
    return new DeleteRequestBuilder<LedgerAdvancedRuleStructures<T>, T>(
      this.entityApi,
      accountRuleStructureNameOrEntity instanceof LedgerAdvancedRuleStructures
        ? accountRuleStructureNameOrEntity
        : {
            AccountRuleStructureName: accountRuleStructureNameOrEntity!,
            Status: status!
          }
    );
  }
}
