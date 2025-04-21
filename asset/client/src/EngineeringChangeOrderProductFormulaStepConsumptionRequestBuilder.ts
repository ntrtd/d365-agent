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
import { EngineeringChangeOrderProductFormulaStepConsumption } from './EngineeringChangeOrderProductFormulaStepConsumption';

/**
 * Request builder class for operations supported on the {@link EngineeringChangeOrderProductFormulaStepConsumption} entity.
 */
export class EngineeringChangeOrderProductFormulaStepConsumptionRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  EngineeringChangeOrderProductFormulaStepConsumption<T>,
  T
> {
  /**
   * Returns a request builder for querying all `EngineeringChangeOrderProductFormulaStepConsumption` entities.
   * @returns A request builder for creating requests to retrieve all `EngineeringChangeOrderProductFormulaStepConsumption` entities.
   */
  getAll(): GetAllRequestBuilder<
    EngineeringChangeOrderProductFormulaStepConsumption<T>,
    T
  > {
    return new GetAllRequestBuilder<
      EngineeringChangeOrderProductFormulaStepConsumption<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EngineeringChangeOrderProductFormulaStepConsumption` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EngineeringChangeOrderProductFormulaStepConsumption`.
   */
  create(
    entity: EngineeringChangeOrderProductFormulaStepConsumption<T>
  ): CreateRequestBuilder<
    EngineeringChangeOrderProductFormulaStepConsumption<T>,
    T
  > {
    return new CreateRequestBuilder<
      EngineeringChangeOrderProductFormulaStepConsumption<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `EngineeringChangeOrderProductFormulaStepConsumption` entity based on its keys.
   * @param dataAreaId Key property. See {@link EngineeringChangeOrderProductFormulaStepConsumption.dataAreaId}.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderProductFormulaStepConsumption.engineeringChangeOrderNumber}.
   * @param engineeringChangeOrderProductLineNumber Key property. See {@link EngineeringChangeOrderProductFormulaStepConsumption.engineeringChangeOrderProductLineNumber}.
   * @param engineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber Key property. See {@link EngineeringChangeOrderProductFormulaStepConsumption.engineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber}.
   * @param engineeringChangeOrderProductBomCreationSequenceNumber Key property. See {@link EngineeringChangeOrderProductFormulaStepConsumption.engineeringChangeOrderProductBomCreationSequenceNumber}.
   * @param fromQty Key property. See {@link EngineeringChangeOrderProductFormulaStepConsumption.fromQty}.
   * @returns A request builder for creating requests to retrieve one `EngineeringChangeOrderProductFormulaStepConsumption` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>,
    engineeringChangeOrderProductLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    engineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber: DeserializedType<
      T,
      'Edm.Int32'
    >,
    engineeringChangeOrderProductBomCreationSequenceNumber: DeserializedType<
      T,
      'Edm.Int32'
    >,
    fromQty: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<
    EngineeringChangeOrderProductFormulaStepConsumption<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      EngineeringChangeOrderProductFormulaStepConsumption<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      EngineeringChangeOrderNumber: engineeringChangeOrderNumber,
      EngineeringChangeOrderProductLineNumber:
        engineeringChangeOrderProductLineNumber,
      EngineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber:
        engineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber,
      EngineeringChangeOrderProductBOMCreationSequenceNumber:
        engineeringChangeOrderProductBomCreationSequenceNumber,
      FromQty: fromQty
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EngineeringChangeOrderProductFormulaStepConsumption`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EngineeringChangeOrderProductFormulaStepConsumption`.
   */
  update(
    entity: EngineeringChangeOrderProductFormulaStepConsumption<T>
  ): UpdateRequestBuilder<
    EngineeringChangeOrderProductFormulaStepConsumption<T>,
    T
  > {
    return new UpdateRequestBuilder<
      EngineeringChangeOrderProductFormulaStepConsumption<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderProductFormulaStepConsumption`.
   * @param dataAreaId Key property. See {@link EngineeringChangeOrderProductFormulaStepConsumption.dataAreaId}.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderProductFormulaStepConsumption.engineeringChangeOrderNumber}.
   * @param engineeringChangeOrderProductLineNumber Key property. See {@link EngineeringChangeOrderProductFormulaStepConsumption.engineeringChangeOrderProductLineNumber}.
   * @param engineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber Key property. See {@link EngineeringChangeOrderProductFormulaStepConsumption.engineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber}.
   * @param engineeringChangeOrderProductBomCreationSequenceNumber Key property. See {@link EngineeringChangeOrderProductFormulaStepConsumption.engineeringChangeOrderProductBomCreationSequenceNumber}.
   * @param fromQty Key property. See {@link EngineeringChangeOrderProductFormulaStepConsumption.fromQty}.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderProductFormulaStepConsumption`.
   */
  delete(
    dataAreaId: string,
    engineeringChangeOrderNumber: string,
    engineeringChangeOrderProductLineNumber: BigNumber,
    engineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber: number,
    engineeringChangeOrderProductBomCreationSequenceNumber: number,
    fromQty: BigNumber
  ): DeleteRequestBuilder<
    EngineeringChangeOrderProductFormulaStepConsumption<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderProductFormulaStepConsumption`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderProductFormulaStepConsumption` by taking the entity as a parameter.
   */
  delete(
    entity: EngineeringChangeOrderProductFormulaStepConsumption<T>
  ): DeleteRequestBuilder<
    EngineeringChangeOrderProductFormulaStepConsumption<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    engineeringChangeOrderNumber?: string,
    engineeringChangeOrderProductLineNumber?: BigNumber,
    engineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber?: number,
    engineeringChangeOrderProductBomCreationSequenceNumber?: number,
    fromQty?: BigNumber
  ): DeleteRequestBuilder<
    EngineeringChangeOrderProductFormulaStepConsumption<T>,
    T
  > {
    return new DeleteRequestBuilder<
      EngineeringChangeOrderProductFormulaStepConsumption<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      EngineeringChangeOrderProductFormulaStepConsumption
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            EngineeringChangeOrderNumber: engineeringChangeOrderNumber!,
            EngineeringChangeOrderProductLineNumber:
              engineeringChangeOrderProductLineNumber!,
            EngineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber:
              engineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber!,
            EngineeringChangeOrderProductBOMCreationSequenceNumber:
              engineeringChangeOrderProductBomCreationSequenceNumber!,
            FromQty: fromQty!
          }
    );
  }
}
