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
import { BudgetControlGroupCriteria } from './BudgetControlGroupCriteria';
import { BudgetControlConfigurationStatus } from './BudgetControlConfigurationStatus';

/**
 * Request builder class for operations supported on the {@link BudgetControlGroupCriteria} entity.
 */
export class BudgetControlGroupCriteriaRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetControlGroupCriteria<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetControlGroupCriteria` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetControlGroupCriteria` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetControlGroupCriteria<T>, T> {
    return new GetAllRequestBuilder<BudgetControlGroupCriteria<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BudgetControlGroupCriteria` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetControlGroupCriteria`.
   */
  create(
    entity: BudgetControlGroupCriteria<T>
  ): CreateRequestBuilder<BudgetControlGroupCriteria<T>, T> {
    return new CreateRequestBuilder<BudgetControlGroupCriteria<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BudgetControlGroupCriteria` entity based on its keys.
   * @param dataAreaId Key property. See {@link BudgetControlGroupCriteria.dataAreaId}.
   * @param legalEntityId Key property. See {@link BudgetControlGroupCriteria.legalEntityId}.
   * @param status Key property. See {@link BudgetControlGroupCriteria.status}.
   * @param memberName Key property. See {@link BudgetControlGroupCriteria.memberName}.
   * @param dimensionAttributeId Key property. See {@link BudgetControlGroupCriteria.dimensionAttributeId}.
   * @returns A request builder for creating requests to retrieve one `BudgetControlGroupCriteria` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>,
    status: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.BudgetControlConfigurationStatus'
    >,
    memberName: DeserializedType<T, 'Edm.String'>,
    dimensionAttributeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BudgetControlGroupCriteria<T>, T> {
    return new GetByKeyRequestBuilder<BudgetControlGroupCriteria<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LegalEntityId: legalEntityId,
        Status: status,
        MemberName: memberName,
        DimensionAttributeId: dimensionAttributeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetControlGroupCriteria`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetControlGroupCriteria`.
   */
  update(
    entity: BudgetControlGroupCriteria<T>
  ): UpdateRequestBuilder<BudgetControlGroupCriteria<T>, T> {
    return new UpdateRequestBuilder<BudgetControlGroupCriteria<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetControlGroupCriteria`.
   * @param dataAreaId Key property. See {@link BudgetControlGroupCriteria.dataAreaId}.
   * @param legalEntityId Key property. See {@link BudgetControlGroupCriteria.legalEntityId}.
   * @param status Key property. See {@link BudgetControlGroupCriteria.status}.
   * @param memberName Key property. See {@link BudgetControlGroupCriteria.memberName}.
   * @param dimensionAttributeId Key property. See {@link BudgetControlGroupCriteria.dimensionAttributeId}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetControlGroupCriteria`.
   */
  delete(
    dataAreaId: string,
    legalEntityId: string,
    status: BudgetControlConfigurationStatus,
    memberName: string,
    dimensionAttributeId: string
  ): DeleteRequestBuilder<BudgetControlGroupCriteria<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetControlGroupCriteria`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetControlGroupCriteria` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetControlGroupCriteria<T>
  ): DeleteRequestBuilder<BudgetControlGroupCriteria<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    legalEntityId?: string,
    status?: BudgetControlConfigurationStatus,
    memberName?: string,
    dimensionAttributeId?: string
  ): DeleteRequestBuilder<BudgetControlGroupCriteria<T>, T> {
    return new DeleteRequestBuilder<BudgetControlGroupCriteria<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BudgetControlGroupCriteria
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LegalEntityId: legalEntityId!,
            Status: status!,
            MemberName: memberName!,
            DimensionAttributeId: dimensionAttributeId!
          }
    );
  }
}
