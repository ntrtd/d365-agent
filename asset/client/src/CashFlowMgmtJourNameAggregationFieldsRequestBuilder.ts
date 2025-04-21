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
import { CashFlowMgmtJourNameAggregationFields } from './CashFlowMgmtJourNameAggregationFields';

/**
 * Request builder class for operations supported on the {@link CashFlowMgmtJourNameAggregationFields} entity.
 */
export class CashFlowMgmtJourNameAggregationFieldsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CashFlowMgmtJourNameAggregationFields<T>, T> {
  /**
   * Returns a request builder for querying all `CashFlowMgmtJourNameAggregationFields` entities.
   * @returns A request builder for creating requests to retrieve all `CashFlowMgmtJourNameAggregationFields` entities.
   */
  getAll(): GetAllRequestBuilder<CashFlowMgmtJourNameAggregationFields<T>, T> {
    return new GetAllRequestBuilder<
      CashFlowMgmtJourNameAggregationFields<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CashFlowMgmtJourNameAggregationFields` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CashFlowMgmtJourNameAggregationFields`.
   */
  create(
    entity: CashFlowMgmtJourNameAggregationFields<T>
  ): CreateRequestBuilder<CashFlowMgmtJourNameAggregationFields<T>, T> {
    return new CreateRequestBuilder<
      CashFlowMgmtJourNameAggregationFields<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CashFlowMgmtJourNameAggregationFields` entity based on its keys.
   * @param dataAreaId Key property. See {@link CashFlowMgmtJourNameAggregationFields.dataAreaId}.
   * @param dimension Key property. See {@link CashFlowMgmtJourNameAggregationFields.dimension}.
   * @param name Key property. See {@link CashFlowMgmtJourNameAggregationFields.name}.
   * @returns A request builder for creating requests to retrieve one `CashFlowMgmtJourNameAggregationFields` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    dimension: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CashFlowMgmtJourNameAggregationFields<T>, T> {
    return new GetByKeyRequestBuilder<
      CashFlowMgmtJourNameAggregationFields<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      Dimension: dimension,
      Name: name
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CashFlowMgmtJourNameAggregationFields`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CashFlowMgmtJourNameAggregationFields`.
   */
  update(
    entity: CashFlowMgmtJourNameAggregationFields<T>
  ): UpdateRequestBuilder<CashFlowMgmtJourNameAggregationFields<T>, T> {
    return new UpdateRequestBuilder<
      CashFlowMgmtJourNameAggregationFields<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CashFlowMgmtJourNameAggregationFields`.
   * @param dataAreaId Key property. See {@link CashFlowMgmtJourNameAggregationFields.dataAreaId}.
   * @param dimension Key property. See {@link CashFlowMgmtJourNameAggregationFields.dimension}.
   * @param name Key property. See {@link CashFlowMgmtJourNameAggregationFields.name}.
   * @returns A request builder for creating requests that delete an entity of type `CashFlowMgmtJourNameAggregationFields`.
   */
  delete(
    dataAreaId: string,
    dimension: string,
    name: string
  ): DeleteRequestBuilder<CashFlowMgmtJourNameAggregationFields<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CashFlowMgmtJourNameAggregationFields`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CashFlowMgmtJourNameAggregationFields` by taking the entity as a parameter.
   */
  delete(
    entity: CashFlowMgmtJourNameAggregationFields<T>
  ): DeleteRequestBuilder<CashFlowMgmtJourNameAggregationFields<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    dimension?: string,
    name?: string
  ): DeleteRequestBuilder<CashFlowMgmtJourNameAggregationFields<T>, T> {
    return new DeleteRequestBuilder<
      CashFlowMgmtJourNameAggregationFields<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof CashFlowMgmtJourNameAggregationFields
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Dimension: dimension!,
            Name: name!
          }
    );
  }
}
