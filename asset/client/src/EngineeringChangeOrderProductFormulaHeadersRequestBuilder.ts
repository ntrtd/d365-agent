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
import { EngineeringChangeOrderProductFormulaHeaders } from './EngineeringChangeOrderProductFormulaHeaders';

/**
 * Request builder class for operations supported on the {@link EngineeringChangeOrderProductFormulaHeaders} entity.
 */
export class EngineeringChangeOrderProductFormulaHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EngineeringChangeOrderProductFormulaHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `EngineeringChangeOrderProductFormulaHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `EngineeringChangeOrderProductFormulaHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<
    EngineeringChangeOrderProductFormulaHeaders<T>,
    T
  > {
    return new GetAllRequestBuilder<
      EngineeringChangeOrderProductFormulaHeaders<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EngineeringChangeOrderProductFormulaHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EngineeringChangeOrderProductFormulaHeaders`.
   */
  create(
    entity: EngineeringChangeOrderProductFormulaHeaders<T>
  ): CreateRequestBuilder<EngineeringChangeOrderProductFormulaHeaders<T>, T> {
    return new CreateRequestBuilder<
      EngineeringChangeOrderProductFormulaHeaders<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `EngineeringChangeOrderProductFormulaHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link EngineeringChangeOrderProductFormulaHeaders.dataAreaId}.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderProductFormulaHeaders.engineeringChangeOrderNumber}.
   * @param engineeringChangeOrderProductLineNumber Key property. See {@link EngineeringChangeOrderProductFormulaHeaders.engineeringChangeOrderProductLineNumber}.
   * @param creationSequenceNumber Key property. See {@link EngineeringChangeOrderProductFormulaHeaders.creationSequenceNumber}.
   * @returns A request builder for creating requests to retrieve one `EngineeringChangeOrderProductFormulaHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>,
    engineeringChangeOrderProductLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    creationSequenceNumber: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<EngineeringChangeOrderProductFormulaHeaders<T>, T> {
    return new GetByKeyRequestBuilder<
      EngineeringChangeOrderProductFormulaHeaders<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      EngineeringChangeOrderNumber: engineeringChangeOrderNumber,
      EngineeringChangeOrderProductLineNumber:
        engineeringChangeOrderProductLineNumber,
      CreationSequenceNumber: creationSequenceNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EngineeringChangeOrderProductFormulaHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EngineeringChangeOrderProductFormulaHeaders`.
   */
  update(
    entity: EngineeringChangeOrderProductFormulaHeaders<T>
  ): UpdateRequestBuilder<EngineeringChangeOrderProductFormulaHeaders<T>, T> {
    return new UpdateRequestBuilder<
      EngineeringChangeOrderProductFormulaHeaders<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderProductFormulaHeaders`.
   * @param dataAreaId Key property. See {@link EngineeringChangeOrderProductFormulaHeaders.dataAreaId}.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderProductFormulaHeaders.engineeringChangeOrderNumber}.
   * @param engineeringChangeOrderProductLineNumber Key property. See {@link EngineeringChangeOrderProductFormulaHeaders.engineeringChangeOrderProductLineNumber}.
   * @param creationSequenceNumber Key property. See {@link EngineeringChangeOrderProductFormulaHeaders.creationSequenceNumber}.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderProductFormulaHeaders`.
   */
  delete(
    dataAreaId: string,
    engineeringChangeOrderNumber: string,
    engineeringChangeOrderProductLineNumber: BigNumber,
    creationSequenceNumber: number
  ): DeleteRequestBuilder<EngineeringChangeOrderProductFormulaHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderProductFormulaHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderProductFormulaHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: EngineeringChangeOrderProductFormulaHeaders<T>
  ): DeleteRequestBuilder<EngineeringChangeOrderProductFormulaHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    engineeringChangeOrderNumber?: string,
    engineeringChangeOrderProductLineNumber?: BigNumber,
    creationSequenceNumber?: number
  ): DeleteRequestBuilder<EngineeringChangeOrderProductFormulaHeaders<T>, T> {
    return new DeleteRequestBuilder<
      EngineeringChangeOrderProductFormulaHeaders<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof EngineeringChangeOrderProductFormulaHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            EngineeringChangeOrderNumber: engineeringChangeOrderNumber!,
            EngineeringChangeOrderProductLineNumber:
              engineeringChangeOrderProductLineNumber!,
            CreationSequenceNumber: creationSequenceNumber!
          }
    );
  }
}
