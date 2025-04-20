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
import { EngineeringChangeOrderProductFormulaCoProducts } from './EngineeringChangeOrderProductFormulaCoProducts';

/**
 * Request builder class for operations supported on the {@link EngineeringChangeOrderProductFormulaCoProducts} entity.
 */
export class EngineeringChangeOrderProductFormulaCoProductsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EngineeringChangeOrderProductFormulaCoProducts<T>, T> {
  /**
   * Returns a request builder for querying all `EngineeringChangeOrderProductFormulaCoProducts` entities.
   * @returns A request builder for creating requests to retrieve all `EngineeringChangeOrderProductFormulaCoProducts` entities.
   */
  getAll(): GetAllRequestBuilder<
    EngineeringChangeOrderProductFormulaCoProducts<T>,
    T
  > {
    return new GetAllRequestBuilder<
      EngineeringChangeOrderProductFormulaCoProducts<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EngineeringChangeOrderProductFormulaCoProducts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EngineeringChangeOrderProductFormulaCoProducts`.
   */
  create(
    entity: EngineeringChangeOrderProductFormulaCoProducts<T>
  ): CreateRequestBuilder<
    EngineeringChangeOrderProductFormulaCoProducts<T>,
    T
  > {
    return new CreateRequestBuilder<
      EngineeringChangeOrderProductFormulaCoProducts<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `EngineeringChangeOrderProductFormulaCoProducts` entity based on its keys.
   * @param dataAreaId Key property. See {@link EngineeringChangeOrderProductFormulaCoProducts.dataAreaId}.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderProductFormulaCoProducts.engineeringChangeOrderNumber}.
   * @param engineeringChangeOrderProductLineNumber Key property. See {@link EngineeringChangeOrderProductFormulaCoProducts.engineeringChangeOrderProductLineNumber}.
   * @param engineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber Key property. See {@link EngineeringChangeOrderProductFormulaCoProducts.engineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber}.
   * @param lineCreationSequenceNumber Key property. See {@link EngineeringChangeOrderProductFormulaCoProducts.lineCreationSequenceNumber}.
   * @returns A request builder for creating requests to retrieve one `EngineeringChangeOrderProductFormulaCoProducts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>,
    engineeringChangeOrderProductLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    engineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber: DeserializedType<
      T,
      'Edm.Int32'
    >,
    lineCreationSequenceNumber: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<
    EngineeringChangeOrderProductFormulaCoProducts<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      EngineeringChangeOrderProductFormulaCoProducts<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      EngineeringChangeOrderNumber: engineeringChangeOrderNumber,
      EngineeringChangeOrderProductLineNumber:
        engineeringChangeOrderProductLineNumber,
      EngineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber:
        engineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber,
      LineCreationSequenceNumber: lineCreationSequenceNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EngineeringChangeOrderProductFormulaCoProducts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EngineeringChangeOrderProductFormulaCoProducts`.
   */
  update(
    entity: EngineeringChangeOrderProductFormulaCoProducts<T>
  ): UpdateRequestBuilder<
    EngineeringChangeOrderProductFormulaCoProducts<T>,
    T
  > {
    return new UpdateRequestBuilder<
      EngineeringChangeOrderProductFormulaCoProducts<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderProductFormulaCoProducts`.
   * @param dataAreaId Key property. See {@link EngineeringChangeOrderProductFormulaCoProducts.dataAreaId}.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderProductFormulaCoProducts.engineeringChangeOrderNumber}.
   * @param engineeringChangeOrderProductLineNumber Key property. See {@link EngineeringChangeOrderProductFormulaCoProducts.engineeringChangeOrderProductLineNumber}.
   * @param engineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber Key property. See {@link EngineeringChangeOrderProductFormulaCoProducts.engineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber}.
   * @param lineCreationSequenceNumber Key property. See {@link EngineeringChangeOrderProductFormulaCoProducts.lineCreationSequenceNumber}.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderProductFormulaCoProducts`.
   */
  delete(
    dataAreaId: string,
    engineeringChangeOrderNumber: string,
    engineeringChangeOrderProductLineNumber: BigNumber,
    engineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber: number,
    lineCreationSequenceNumber: number
  ): DeleteRequestBuilder<EngineeringChangeOrderProductFormulaCoProducts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderProductFormulaCoProducts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderProductFormulaCoProducts` by taking the entity as a parameter.
   */
  delete(
    entity: EngineeringChangeOrderProductFormulaCoProducts<T>
  ): DeleteRequestBuilder<EngineeringChangeOrderProductFormulaCoProducts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    engineeringChangeOrderNumber?: string,
    engineeringChangeOrderProductLineNumber?: BigNumber,
    engineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber?: number,
    lineCreationSequenceNumber?: number
  ): DeleteRequestBuilder<
    EngineeringChangeOrderProductFormulaCoProducts<T>,
    T
  > {
    return new DeleteRequestBuilder<
      EngineeringChangeOrderProductFormulaCoProducts<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      EngineeringChangeOrderProductFormulaCoProducts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            EngineeringChangeOrderNumber: engineeringChangeOrderNumber!,
            EngineeringChangeOrderProductLineNumber:
              engineeringChangeOrderProductLineNumber!,
            EngineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber:
              engineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber!,
            LineCreationSequenceNumber: lineCreationSequenceNumber!
          }
    );
  }
}
