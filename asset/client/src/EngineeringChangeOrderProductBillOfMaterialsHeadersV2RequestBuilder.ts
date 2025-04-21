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
import { EngineeringChangeOrderProductBillOfMaterialsHeadersV2 } from './EngineeringChangeOrderProductBillOfMaterialsHeadersV2';

/**
 * Request builder class for operations supported on the {@link EngineeringChangeOrderProductBillOfMaterialsHeadersV2} entity.
 */
export class EngineeringChangeOrderProductBillOfMaterialsHeadersV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  EngineeringChangeOrderProductBillOfMaterialsHeadersV2<T>,
  T
> {
  /**
   * Returns a request builder for querying all `EngineeringChangeOrderProductBillOfMaterialsHeadersV2` entities.
   * @returns A request builder for creating requests to retrieve all `EngineeringChangeOrderProductBillOfMaterialsHeadersV2` entities.
   */
  getAll(): GetAllRequestBuilder<
    EngineeringChangeOrderProductBillOfMaterialsHeadersV2<T>,
    T
  > {
    return new GetAllRequestBuilder<
      EngineeringChangeOrderProductBillOfMaterialsHeadersV2<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EngineeringChangeOrderProductBillOfMaterialsHeadersV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EngineeringChangeOrderProductBillOfMaterialsHeadersV2`.
   */
  create(
    entity: EngineeringChangeOrderProductBillOfMaterialsHeadersV2<T>
  ): CreateRequestBuilder<
    EngineeringChangeOrderProductBillOfMaterialsHeadersV2<T>,
    T
  > {
    return new CreateRequestBuilder<
      EngineeringChangeOrderProductBillOfMaterialsHeadersV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `EngineeringChangeOrderProductBillOfMaterialsHeadersV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link EngineeringChangeOrderProductBillOfMaterialsHeadersV2.dataAreaId}.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderProductBillOfMaterialsHeadersV2.engineeringChangeOrderNumber}.
   * @param engineeringChangeOrderProductLineNumber Key property. See {@link EngineeringChangeOrderProductBillOfMaterialsHeadersV2.engineeringChangeOrderProductLineNumber}.
   * @param creationSequenceNumber Key property. See {@link EngineeringChangeOrderProductBillOfMaterialsHeadersV2.creationSequenceNumber}.
   * @returns A request builder for creating requests to retrieve one `EngineeringChangeOrderProductBillOfMaterialsHeadersV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>,
    engineeringChangeOrderProductLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    creationSequenceNumber: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<
    EngineeringChangeOrderProductBillOfMaterialsHeadersV2<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      EngineeringChangeOrderProductBillOfMaterialsHeadersV2<T>,
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
   * Returns a request builder for updating an entity of type `EngineeringChangeOrderProductBillOfMaterialsHeadersV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EngineeringChangeOrderProductBillOfMaterialsHeadersV2`.
   */
  update(
    entity: EngineeringChangeOrderProductBillOfMaterialsHeadersV2<T>
  ): UpdateRequestBuilder<
    EngineeringChangeOrderProductBillOfMaterialsHeadersV2<T>,
    T
  > {
    return new UpdateRequestBuilder<
      EngineeringChangeOrderProductBillOfMaterialsHeadersV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderProductBillOfMaterialsHeadersV2`.
   * @param dataAreaId Key property. See {@link EngineeringChangeOrderProductBillOfMaterialsHeadersV2.dataAreaId}.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderProductBillOfMaterialsHeadersV2.engineeringChangeOrderNumber}.
   * @param engineeringChangeOrderProductLineNumber Key property. See {@link EngineeringChangeOrderProductBillOfMaterialsHeadersV2.engineeringChangeOrderProductLineNumber}.
   * @param creationSequenceNumber Key property. See {@link EngineeringChangeOrderProductBillOfMaterialsHeadersV2.creationSequenceNumber}.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderProductBillOfMaterialsHeadersV2`.
   */
  delete(
    dataAreaId: string,
    engineeringChangeOrderNumber: string,
    engineeringChangeOrderProductLineNumber: BigNumber,
    creationSequenceNumber: number
  ): DeleteRequestBuilder<
    EngineeringChangeOrderProductBillOfMaterialsHeadersV2<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderProductBillOfMaterialsHeadersV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderProductBillOfMaterialsHeadersV2` by taking the entity as a parameter.
   */
  delete(
    entity: EngineeringChangeOrderProductBillOfMaterialsHeadersV2<T>
  ): DeleteRequestBuilder<
    EngineeringChangeOrderProductBillOfMaterialsHeadersV2<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    engineeringChangeOrderNumber?: string,
    engineeringChangeOrderProductLineNumber?: BigNumber,
    creationSequenceNumber?: number
  ): DeleteRequestBuilder<
    EngineeringChangeOrderProductBillOfMaterialsHeadersV2<T>,
    T
  > {
    return new DeleteRequestBuilder<
      EngineeringChangeOrderProductBillOfMaterialsHeadersV2<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      EngineeringChangeOrderProductBillOfMaterialsHeadersV2
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
