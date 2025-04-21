/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { EngineeringChangeOrderProductBillOfMaterialsHeaders } from './EngineeringChangeOrderProductBillOfMaterialsHeaders';

/**
 * Request builder class for operations supported on the {@link EngineeringChangeOrderProductBillOfMaterialsHeaders} entity.
 */
export class EngineeringChangeOrderProductBillOfMaterialsHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  EngineeringChangeOrderProductBillOfMaterialsHeaders<T>,
  T
> {
  /**
   * Returns a request builder for querying all `EngineeringChangeOrderProductBillOfMaterialsHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `EngineeringChangeOrderProductBillOfMaterialsHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<
    EngineeringChangeOrderProductBillOfMaterialsHeaders<T>,
    T
  > {
    return new GetAllRequestBuilder<
      EngineeringChangeOrderProductBillOfMaterialsHeaders<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EngineeringChangeOrderProductBillOfMaterialsHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EngineeringChangeOrderProductBillOfMaterialsHeaders`.
   */
  create(
    entity: EngineeringChangeOrderProductBillOfMaterialsHeaders<T>
  ): CreateRequestBuilder<
    EngineeringChangeOrderProductBillOfMaterialsHeaders<T>,
    T
  > {
    return new CreateRequestBuilder<
      EngineeringChangeOrderProductBillOfMaterialsHeaders<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `EngineeringChangeOrderProductBillOfMaterialsHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link EngineeringChangeOrderProductBillOfMaterialsHeaders.dataAreaId}.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderProductBillOfMaterialsHeaders.engineeringChangeOrderNumber}.
   * @param engineeringChangeOrderProductLineNumber Key property. See {@link EngineeringChangeOrderProductBillOfMaterialsHeaders.engineeringChangeOrderProductLineNumber}.
   * @param productionSiteId Key property. See {@link EngineeringChangeOrderProductBillOfMaterialsHeaders.productionSiteId}.
   * @param bomId Key property. See {@link EngineeringChangeOrderProductBillOfMaterialsHeaders.bomId}.
   * @returns A request builder for creating requests to retrieve one `EngineeringChangeOrderProductBillOfMaterialsHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>,
    engineeringChangeOrderProductLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    productionSiteId: DeserializedType<T, 'Edm.String'>,
    bomId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    EngineeringChangeOrderProductBillOfMaterialsHeaders<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      EngineeringChangeOrderProductBillOfMaterialsHeaders<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      EngineeringChangeOrderNumber: engineeringChangeOrderNumber,
      EngineeringChangeOrderProductLineNumber:
        engineeringChangeOrderProductLineNumber,
      ProductionSiteId: productionSiteId,
      BOMId: bomId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EngineeringChangeOrderProductBillOfMaterialsHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EngineeringChangeOrderProductBillOfMaterialsHeaders`.
   */
  update(
    entity: EngineeringChangeOrderProductBillOfMaterialsHeaders<T>
  ): UpdateRequestBuilder<
    EngineeringChangeOrderProductBillOfMaterialsHeaders<T>,
    T
  > {
    return new UpdateRequestBuilder<
      EngineeringChangeOrderProductBillOfMaterialsHeaders<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderProductBillOfMaterialsHeaders`.
   * @param dataAreaId Key property. See {@link EngineeringChangeOrderProductBillOfMaterialsHeaders.dataAreaId}.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderProductBillOfMaterialsHeaders.engineeringChangeOrderNumber}.
   * @param engineeringChangeOrderProductLineNumber Key property. See {@link EngineeringChangeOrderProductBillOfMaterialsHeaders.engineeringChangeOrderProductLineNumber}.
   * @param productionSiteId Key property. See {@link EngineeringChangeOrderProductBillOfMaterialsHeaders.productionSiteId}.
   * @param bomId Key property. See {@link EngineeringChangeOrderProductBillOfMaterialsHeaders.bomId}.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderProductBillOfMaterialsHeaders`.
   */
  delete(
    dataAreaId: string,
    engineeringChangeOrderNumber: string,
    engineeringChangeOrderProductLineNumber: BigNumber,
    productionSiteId: string,
    bomId: string
  ): DeleteRequestBuilder<
    EngineeringChangeOrderProductBillOfMaterialsHeaders<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderProductBillOfMaterialsHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderProductBillOfMaterialsHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: EngineeringChangeOrderProductBillOfMaterialsHeaders<T>
  ): DeleteRequestBuilder<
    EngineeringChangeOrderProductBillOfMaterialsHeaders<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    engineeringChangeOrderNumber?: string,
    engineeringChangeOrderProductLineNumber?: BigNumber,
    productionSiteId?: string,
    bomId?: string
  ): DeleteRequestBuilder<
    EngineeringChangeOrderProductBillOfMaterialsHeaders<T>,
    T
  > {
    return new DeleteRequestBuilder<
      EngineeringChangeOrderProductBillOfMaterialsHeaders<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      EngineeringChangeOrderProductBillOfMaterialsHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            EngineeringChangeOrderNumber: engineeringChangeOrderNumber!,
            EngineeringChangeOrderProductLineNumber:
              engineeringChangeOrderProductLineNumber!,
            ProductionSiteId: productionSiteId!,
            BOMId: bomId!
          }
    );
  }
}
