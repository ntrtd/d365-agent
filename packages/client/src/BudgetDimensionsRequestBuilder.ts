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
import { BudgetDimensions } from './BudgetDimensions';

/**
 * Request builder class for operations supported on the {@link BudgetDimensions} entity.
 */
export class BudgetDimensionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetDimensions<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetDimensions` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetDimensions` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetDimensions<T>, T> {
    return new GetAllRequestBuilder<BudgetDimensions<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BudgetDimensions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetDimensions`.
   */
  create(
    entity: BudgetDimensions<T>
  ): CreateRequestBuilder<BudgetDimensions<T>, T> {
    return new CreateRequestBuilder<BudgetDimensions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BudgetDimensions` entity based on its keys.
   * @param dataAreaId Key property. See {@link BudgetDimensions.dataAreaId}.
   * @param legalEntityId Key property. See {@link BudgetDimensions.legalEntityId}.
   * @param dimensionAttributeId Key property. See {@link BudgetDimensions.dimensionAttributeId}.
   * @returns A request builder for creating requests to retrieve one `BudgetDimensions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>,
    dimensionAttributeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BudgetDimensions<T>, T> {
    return new GetByKeyRequestBuilder<BudgetDimensions<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      LegalEntityId: legalEntityId,
      DimensionAttributeId: dimensionAttributeId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetDimensions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetDimensions`.
   */
  update(
    entity: BudgetDimensions<T>
  ): UpdateRequestBuilder<BudgetDimensions<T>, T> {
    return new UpdateRequestBuilder<BudgetDimensions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetDimensions`.
   * @param dataAreaId Key property. See {@link BudgetDimensions.dataAreaId}.
   * @param legalEntityId Key property. See {@link BudgetDimensions.legalEntityId}.
   * @param dimensionAttributeId Key property. See {@link BudgetDimensions.dimensionAttributeId}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetDimensions`.
   */
  delete(
    dataAreaId: string,
    legalEntityId: string,
    dimensionAttributeId: string
  ): DeleteRequestBuilder<BudgetDimensions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetDimensions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetDimensions` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetDimensions<T>
  ): DeleteRequestBuilder<BudgetDimensions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    legalEntityId?: string,
    dimensionAttributeId?: string
  ): DeleteRequestBuilder<BudgetDimensions<T>, T> {
    return new DeleteRequestBuilder<BudgetDimensions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BudgetDimensions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LegalEntityId: legalEntityId!,
            DimensionAttributeId: dimensionAttributeId!
          }
    );
  }
}
