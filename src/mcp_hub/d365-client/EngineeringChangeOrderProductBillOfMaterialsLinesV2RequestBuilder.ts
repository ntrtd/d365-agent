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
import { EngineeringChangeOrderProductBillOfMaterialsLinesV2 } from './EngineeringChangeOrderProductBillOfMaterialsLinesV2';

/**
 * Request builder class for operations supported on the {@link EngineeringChangeOrderProductBillOfMaterialsLinesV2} entity.
 */
export class EngineeringChangeOrderProductBillOfMaterialsLinesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  EngineeringChangeOrderProductBillOfMaterialsLinesV2<T>,
  T
> {
  /**
   * Returns a request builder for querying all `EngineeringChangeOrderProductBillOfMaterialsLinesV2` entities.
   * @returns A request builder for creating requests to retrieve all `EngineeringChangeOrderProductBillOfMaterialsLinesV2` entities.
   */
  getAll(): GetAllRequestBuilder<
    EngineeringChangeOrderProductBillOfMaterialsLinesV2<T>,
    T
  > {
    return new GetAllRequestBuilder<
      EngineeringChangeOrderProductBillOfMaterialsLinesV2<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EngineeringChangeOrderProductBillOfMaterialsLinesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EngineeringChangeOrderProductBillOfMaterialsLinesV2`.
   */
  create(
    entity: EngineeringChangeOrderProductBillOfMaterialsLinesV2<T>
  ): CreateRequestBuilder<
    EngineeringChangeOrderProductBillOfMaterialsLinesV2<T>,
    T
  > {
    return new CreateRequestBuilder<
      EngineeringChangeOrderProductBillOfMaterialsLinesV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `EngineeringChangeOrderProductBillOfMaterialsLinesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link EngineeringChangeOrderProductBillOfMaterialsLinesV2.dataAreaId}.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderProductBillOfMaterialsLinesV2.engineeringChangeOrderNumber}.
   * @param engineeringChangeOrderProductLineNumber Key property. See {@link EngineeringChangeOrderProductBillOfMaterialsLinesV2.engineeringChangeOrderProductLineNumber}.
   * @param engineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber Key property. See {@link EngineeringChangeOrderProductBillOfMaterialsLinesV2.engineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber}.
   * @param lineCreationSequenceNumber Key property. See {@link EngineeringChangeOrderProductBillOfMaterialsLinesV2.lineCreationSequenceNumber}.
   * @returns A request builder for creating requests to retrieve one `EngineeringChangeOrderProductBillOfMaterialsLinesV2` entity based on its keys.
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
    EngineeringChangeOrderProductBillOfMaterialsLinesV2<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      EngineeringChangeOrderProductBillOfMaterialsLinesV2<T>,
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
   * Returns a request builder for updating an entity of type `EngineeringChangeOrderProductBillOfMaterialsLinesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EngineeringChangeOrderProductBillOfMaterialsLinesV2`.
   */
  update(
    entity: EngineeringChangeOrderProductBillOfMaterialsLinesV2<T>
  ): UpdateRequestBuilder<
    EngineeringChangeOrderProductBillOfMaterialsLinesV2<T>,
    T
  > {
    return new UpdateRequestBuilder<
      EngineeringChangeOrderProductBillOfMaterialsLinesV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderProductBillOfMaterialsLinesV2`.
   * @param dataAreaId Key property. See {@link EngineeringChangeOrderProductBillOfMaterialsLinesV2.dataAreaId}.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderProductBillOfMaterialsLinesV2.engineeringChangeOrderNumber}.
   * @param engineeringChangeOrderProductLineNumber Key property. See {@link EngineeringChangeOrderProductBillOfMaterialsLinesV2.engineeringChangeOrderProductLineNumber}.
   * @param engineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber Key property. See {@link EngineeringChangeOrderProductBillOfMaterialsLinesV2.engineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber}.
   * @param lineCreationSequenceNumber Key property. See {@link EngineeringChangeOrderProductBillOfMaterialsLinesV2.lineCreationSequenceNumber}.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderProductBillOfMaterialsLinesV2`.
   */
  delete(
    dataAreaId: string,
    engineeringChangeOrderNumber: string,
    engineeringChangeOrderProductLineNumber: BigNumber,
    engineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber: number,
    lineCreationSequenceNumber: number
  ): DeleteRequestBuilder<
    EngineeringChangeOrderProductBillOfMaterialsLinesV2<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderProductBillOfMaterialsLinesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderProductBillOfMaterialsLinesV2` by taking the entity as a parameter.
   */
  delete(
    entity: EngineeringChangeOrderProductBillOfMaterialsLinesV2<T>
  ): DeleteRequestBuilder<
    EngineeringChangeOrderProductBillOfMaterialsLinesV2<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    engineeringChangeOrderNumber?: string,
    engineeringChangeOrderProductLineNumber?: BigNumber,
    engineeringChangeOrderProductBillOfMaterialsHeaderCreationSequenceNumber?: number,
    lineCreationSequenceNumber?: number
  ): DeleteRequestBuilder<
    EngineeringChangeOrderProductBillOfMaterialsLinesV2<T>,
    T
  > {
    return new DeleteRequestBuilder<
      EngineeringChangeOrderProductBillOfMaterialsLinesV2<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      EngineeringChangeOrderProductBillOfMaterialsLinesV2
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
