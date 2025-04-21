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
import { BudgetControlDimensionAttributes } from './BudgetControlDimensionAttributes';
import { BudgetControlConfigurationStatus } from './BudgetControlConfigurationStatus';

/**
 * Request builder class for operations supported on the {@link BudgetControlDimensionAttributes} entity.
 */
export class BudgetControlDimensionAttributesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetControlDimensionAttributes<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetControlDimensionAttributes` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetControlDimensionAttributes` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetControlDimensionAttributes<T>, T> {
    return new GetAllRequestBuilder<BudgetControlDimensionAttributes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BudgetControlDimensionAttributes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetControlDimensionAttributes`.
   */
  create(
    entity: BudgetControlDimensionAttributes<T>
  ): CreateRequestBuilder<BudgetControlDimensionAttributes<T>, T> {
    return new CreateRequestBuilder<BudgetControlDimensionAttributes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BudgetControlDimensionAttributes` entity based on its keys.
   * @param dataAreaId Key property. See {@link BudgetControlDimensionAttributes.dataAreaId}.
   * @param legalEntityId Key property. See {@link BudgetControlDimensionAttributes.legalEntityId}.
   * @param status Key property. See {@link BudgetControlDimensionAttributes.status}.
   * @param dimensionAttributeId Key property. See {@link BudgetControlDimensionAttributes.dimensionAttributeId}.
   * @returns A request builder for creating requests to retrieve one `BudgetControlDimensionAttributes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>,
    status: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.BudgetControlConfigurationStatus'
    >,
    dimensionAttributeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BudgetControlDimensionAttributes<T>, T> {
    return new GetByKeyRequestBuilder<BudgetControlDimensionAttributes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LegalEntityId: legalEntityId,
        Status: status,
        DimensionAttributeId: dimensionAttributeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetControlDimensionAttributes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetControlDimensionAttributes`.
   */
  update(
    entity: BudgetControlDimensionAttributes<T>
  ): UpdateRequestBuilder<BudgetControlDimensionAttributes<T>, T> {
    return new UpdateRequestBuilder<BudgetControlDimensionAttributes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetControlDimensionAttributes`.
   * @param dataAreaId Key property. See {@link BudgetControlDimensionAttributes.dataAreaId}.
   * @param legalEntityId Key property. See {@link BudgetControlDimensionAttributes.legalEntityId}.
   * @param status Key property. See {@link BudgetControlDimensionAttributes.status}.
   * @param dimensionAttributeId Key property. See {@link BudgetControlDimensionAttributes.dimensionAttributeId}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetControlDimensionAttributes`.
   */
  delete(
    dataAreaId: string,
    legalEntityId: string,
    status: BudgetControlConfigurationStatus,
    dimensionAttributeId: string
  ): DeleteRequestBuilder<BudgetControlDimensionAttributes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetControlDimensionAttributes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetControlDimensionAttributes` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetControlDimensionAttributes<T>
  ): DeleteRequestBuilder<BudgetControlDimensionAttributes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    legalEntityId?: string,
    status?: BudgetControlConfigurationStatus,
    dimensionAttributeId?: string
  ): DeleteRequestBuilder<BudgetControlDimensionAttributes<T>, T> {
    return new DeleteRequestBuilder<BudgetControlDimensionAttributes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BudgetControlDimensionAttributes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LegalEntityId: legalEntityId!,
            Status: status!,
            DimensionAttributeId: dimensionAttributeId!
          }
    );
  }
}
