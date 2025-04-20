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
import { EngineeringChangeOrderProductFormulaLines } from './EngineeringChangeOrderProductFormulaLines';

/**
 * Request builder class for operations supported on the {@link EngineeringChangeOrderProductFormulaLines} entity.
 */
export class EngineeringChangeOrderProductFormulaLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EngineeringChangeOrderProductFormulaLines<T>, T> {
  /**
   * Returns a request builder for querying all `EngineeringChangeOrderProductFormulaLines` entities.
   * @returns A request builder for creating requests to retrieve all `EngineeringChangeOrderProductFormulaLines` entities.
   */
  getAll(): GetAllRequestBuilder<
    EngineeringChangeOrderProductFormulaLines<T>,
    T
  > {
    return new GetAllRequestBuilder<
      EngineeringChangeOrderProductFormulaLines<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EngineeringChangeOrderProductFormulaLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EngineeringChangeOrderProductFormulaLines`.
   */
  create(
    entity: EngineeringChangeOrderProductFormulaLines<T>
  ): CreateRequestBuilder<EngineeringChangeOrderProductFormulaLines<T>, T> {
    return new CreateRequestBuilder<
      EngineeringChangeOrderProductFormulaLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `EngineeringChangeOrderProductFormulaLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link EngineeringChangeOrderProductFormulaLines.dataAreaId}.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderProductFormulaLines.engineeringChangeOrderNumber}.
   * @param engineeringChangeOrderProductLineNumber Key property. See {@link EngineeringChangeOrderProductFormulaLines.engineeringChangeOrderProductLineNumber}.
   * @param engineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber Key property. See {@link EngineeringChangeOrderProductFormulaLines.engineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber}.
   * @param lineCreationSequenceNumber Key property. See {@link EngineeringChangeOrderProductFormulaLines.lineCreationSequenceNumber}.
   * @returns A request builder for creating requests to retrieve one `EngineeringChangeOrderProductFormulaLines` entity based on its keys.
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
  ): GetByKeyRequestBuilder<EngineeringChangeOrderProductFormulaLines<T>, T> {
    return new GetByKeyRequestBuilder<
      EngineeringChangeOrderProductFormulaLines<T>,
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
   * Returns a request builder for updating an entity of type `EngineeringChangeOrderProductFormulaLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EngineeringChangeOrderProductFormulaLines`.
   */
  update(
    entity: EngineeringChangeOrderProductFormulaLines<T>
  ): UpdateRequestBuilder<EngineeringChangeOrderProductFormulaLines<T>, T> {
    return new UpdateRequestBuilder<
      EngineeringChangeOrderProductFormulaLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderProductFormulaLines`.
   * @param dataAreaId Key property. See {@link EngineeringChangeOrderProductFormulaLines.dataAreaId}.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderProductFormulaLines.engineeringChangeOrderNumber}.
   * @param engineeringChangeOrderProductLineNumber Key property. See {@link EngineeringChangeOrderProductFormulaLines.engineeringChangeOrderProductLineNumber}.
   * @param engineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber Key property. See {@link EngineeringChangeOrderProductFormulaLines.engineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber}.
   * @param lineCreationSequenceNumber Key property. See {@link EngineeringChangeOrderProductFormulaLines.lineCreationSequenceNumber}.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderProductFormulaLines`.
   */
  delete(
    dataAreaId: string,
    engineeringChangeOrderNumber: string,
    engineeringChangeOrderProductLineNumber: BigNumber,
    engineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber: number,
    lineCreationSequenceNumber: number
  ): DeleteRequestBuilder<EngineeringChangeOrderProductFormulaLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderProductFormulaLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderProductFormulaLines` by taking the entity as a parameter.
   */
  delete(
    entity: EngineeringChangeOrderProductFormulaLines<T>
  ): DeleteRequestBuilder<EngineeringChangeOrderProductFormulaLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    engineeringChangeOrderNumber?: string,
    engineeringChangeOrderProductLineNumber?: BigNumber,
    engineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber?: number,
    lineCreationSequenceNumber?: number
  ): DeleteRequestBuilder<EngineeringChangeOrderProductFormulaLines<T>, T> {
    return new DeleteRequestBuilder<
      EngineeringChangeOrderProductFormulaLines<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof EngineeringChangeOrderProductFormulaLines
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
