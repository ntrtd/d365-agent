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
import { EngineeringChangeOrderProductFormulaByProducts } from './EngineeringChangeOrderProductFormulaByProducts';

/**
 * Request builder class for operations supported on the {@link EngineeringChangeOrderProductFormulaByProducts} entity.
 */
export class EngineeringChangeOrderProductFormulaByProductsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EngineeringChangeOrderProductFormulaByProducts<T>, T> {
  /**
   * Returns a request builder for querying all `EngineeringChangeOrderProductFormulaByProducts` entities.
   * @returns A request builder for creating requests to retrieve all `EngineeringChangeOrderProductFormulaByProducts` entities.
   */
  getAll(): GetAllRequestBuilder<
    EngineeringChangeOrderProductFormulaByProducts<T>,
    T
  > {
    return new GetAllRequestBuilder<
      EngineeringChangeOrderProductFormulaByProducts<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EngineeringChangeOrderProductFormulaByProducts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EngineeringChangeOrderProductFormulaByProducts`.
   */
  create(
    entity: EngineeringChangeOrderProductFormulaByProducts<T>
  ): CreateRequestBuilder<
    EngineeringChangeOrderProductFormulaByProducts<T>,
    T
  > {
    return new CreateRequestBuilder<
      EngineeringChangeOrderProductFormulaByProducts<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `EngineeringChangeOrderProductFormulaByProducts` entity based on its keys.
   * @param dataAreaId Key property. See {@link EngineeringChangeOrderProductFormulaByProducts.dataAreaId}.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderProductFormulaByProducts.engineeringChangeOrderNumber}.
   * @param engineeringChangeOrderProductLineNumber Key property. See {@link EngineeringChangeOrderProductFormulaByProducts.engineeringChangeOrderProductLineNumber}.
   * @param engineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber Key property. See {@link EngineeringChangeOrderProductFormulaByProducts.engineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber}.
   * @param lineCreationSequenceNumber Key property. See {@link EngineeringChangeOrderProductFormulaByProducts.lineCreationSequenceNumber}.
   * @returns A request builder for creating requests to retrieve one `EngineeringChangeOrderProductFormulaByProducts` entity based on its keys.
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
    EngineeringChangeOrderProductFormulaByProducts<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      EngineeringChangeOrderProductFormulaByProducts<T>,
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
   * Returns a request builder for updating an entity of type `EngineeringChangeOrderProductFormulaByProducts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EngineeringChangeOrderProductFormulaByProducts`.
   */
  update(
    entity: EngineeringChangeOrderProductFormulaByProducts<T>
  ): UpdateRequestBuilder<
    EngineeringChangeOrderProductFormulaByProducts<T>,
    T
  > {
    return new UpdateRequestBuilder<
      EngineeringChangeOrderProductFormulaByProducts<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderProductFormulaByProducts`.
   * @param dataAreaId Key property. See {@link EngineeringChangeOrderProductFormulaByProducts.dataAreaId}.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderProductFormulaByProducts.engineeringChangeOrderNumber}.
   * @param engineeringChangeOrderProductLineNumber Key property. See {@link EngineeringChangeOrderProductFormulaByProducts.engineeringChangeOrderProductLineNumber}.
   * @param engineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber Key property. See {@link EngineeringChangeOrderProductFormulaByProducts.engineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber}.
   * @param lineCreationSequenceNumber Key property. See {@link EngineeringChangeOrderProductFormulaByProducts.lineCreationSequenceNumber}.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderProductFormulaByProducts`.
   */
  delete(
    dataAreaId: string,
    engineeringChangeOrderNumber: string,
    engineeringChangeOrderProductLineNumber: BigNumber,
    engineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber: number,
    lineCreationSequenceNumber: number
  ): DeleteRequestBuilder<EngineeringChangeOrderProductFormulaByProducts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderProductFormulaByProducts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderProductFormulaByProducts` by taking the entity as a parameter.
   */
  delete(
    entity: EngineeringChangeOrderProductFormulaByProducts<T>
  ): DeleteRequestBuilder<EngineeringChangeOrderProductFormulaByProducts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    engineeringChangeOrderNumber?: string,
    engineeringChangeOrderProductLineNumber?: BigNumber,
    engineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber?: number,
    lineCreationSequenceNumber?: number
  ): DeleteRequestBuilder<
    EngineeringChangeOrderProductFormulaByProducts<T>,
    T
  > {
    return new DeleteRequestBuilder<
      EngineeringChangeOrderProductFormulaByProducts<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      EngineeringChangeOrderProductFormulaByProducts
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
