/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { CostSheetNodeCalculationFactors } from './CostSheetNodeCalculationFactors';

/**
 * Request builder class for operations supported on the {@link CostSheetNodeCalculationFactors} entity.
 */
export class CostSheetNodeCalculationFactorsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CostSheetNodeCalculationFactors<T>, T> {
  /**
   * Returns a request builder for querying all `CostSheetNodeCalculationFactors` entities.
   * @returns A request builder for creating requests to retrieve all `CostSheetNodeCalculationFactors` entities.
   */
  getAll(): GetAllRequestBuilder<CostSheetNodeCalculationFactors<T>, T> {
    return new GetAllRequestBuilder<CostSheetNodeCalculationFactors<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CostSheetNodeCalculationFactors` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CostSheetNodeCalculationFactors`.
   */
  create(
    entity: CostSheetNodeCalculationFactors<T>
  ): CreateRequestBuilder<CostSheetNodeCalculationFactors<T>, T> {
    return new CreateRequestBuilder<CostSheetNodeCalculationFactors<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CostSheetNodeCalculationFactors` entity based on its keys.
   * @param dataAreaId Key property. See {@link CostSheetNodeCalculationFactors.dataAreaId}.
   * @param costSheetNodeName Key property. See {@link CostSheetNodeCalculationFactors.costSheetNodeName}.
   * @param priceSiteId Key property. See {@link CostSheetNodeCalculationFactors.priceSiteId}.
   * @param fromDate Key property. See {@link CostSheetNodeCalculationFactors.fromDate}.
   * @param costingVersionId Key property. See {@link CostSheetNodeCalculationFactors.costingVersionId}.
   * @param itemNumber Key property. See {@link CostSheetNodeCalculationFactors.itemNumber}.
   * @param productGroupId Key property. See {@link CostSheetNodeCalculationFactors.productGroupId}.
   * @returns A request builder for creating requests to retrieve one `CostSheetNodeCalculationFactors` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    costSheetNodeName: DeserializedType<T, 'Edm.String'>,
    priceSiteId: DeserializedType<T, 'Edm.String'>,
    fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    costingVersionId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    productGroupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CostSheetNodeCalculationFactors<T>, T> {
    return new GetByKeyRequestBuilder<CostSheetNodeCalculationFactors<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CostSheetNodeName: costSheetNodeName,
        PriceSiteId: priceSiteId,
        FromDate: fromDate,
        CostingVersionId: costingVersionId,
        ItemNumber: itemNumber,
        ProductGroupId: productGroupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CostSheetNodeCalculationFactors`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CostSheetNodeCalculationFactors`.
   */
  update(
    entity: CostSheetNodeCalculationFactors<T>
  ): UpdateRequestBuilder<CostSheetNodeCalculationFactors<T>, T> {
    return new UpdateRequestBuilder<CostSheetNodeCalculationFactors<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CostSheetNodeCalculationFactors`.
   * @param dataAreaId Key property. See {@link CostSheetNodeCalculationFactors.dataAreaId}.
   * @param costSheetNodeName Key property. See {@link CostSheetNodeCalculationFactors.costSheetNodeName}.
   * @param priceSiteId Key property. See {@link CostSheetNodeCalculationFactors.priceSiteId}.
   * @param fromDate Key property. See {@link CostSheetNodeCalculationFactors.fromDate}.
   * @param costingVersionId Key property. See {@link CostSheetNodeCalculationFactors.costingVersionId}.
   * @param itemNumber Key property. See {@link CostSheetNodeCalculationFactors.itemNumber}.
   * @param productGroupId Key property. See {@link CostSheetNodeCalculationFactors.productGroupId}.
   * @returns A request builder for creating requests that delete an entity of type `CostSheetNodeCalculationFactors`.
   */
  delete(
    dataAreaId: string,
    costSheetNodeName: string,
    priceSiteId: string,
    fromDate: Moment,
    costingVersionId: string,
    itemNumber: string,
    productGroupId: string
  ): DeleteRequestBuilder<CostSheetNodeCalculationFactors<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CostSheetNodeCalculationFactors`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CostSheetNodeCalculationFactors` by taking the entity as a parameter.
   */
  delete(
    entity: CostSheetNodeCalculationFactors<T>
  ): DeleteRequestBuilder<CostSheetNodeCalculationFactors<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    costSheetNodeName?: string,
    priceSiteId?: string,
    fromDate?: Moment,
    costingVersionId?: string,
    itemNumber?: string,
    productGroupId?: string
  ): DeleteRequestBuilder<CostSheetNodeCalculationFactors<T>, T> {
    return new DeleteRequestBuilder<CostSheetNodeCalculationFactors<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CostSheetNodeCalculationFactors
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CostSheetNodeName: costSheetNodeName!,
            PriceSiteId: priceSiteId!,
            FromDate: fromDate!,
            CostingVersionId: costingVersionId!,
            ItemNumber: itemNumber!,
            ProductGroupId: productGroupId!
          }
    );
  }
}
