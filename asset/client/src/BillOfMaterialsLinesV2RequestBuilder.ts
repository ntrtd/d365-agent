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
import { BillOfMaterialsLinesV2 } from './BillOfMaterialsLinesV2';

/**
 * Request builder class for operations supported on the {@link BillOfMaterialsLinesV2} entity.
 */
export class BillOfMaterialsLinesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BillOfMaterialsLinesV2<T>, T> {
  /**
   * Returns a request builder for querying all `BillOfMaterialsLinesV2` entities.
   * @returns A request builder for creating requests to retrieve all `BillOfMaterialsLinesV2` entities.
   */
  getAll(): GetAllRequestBuilder<BillOfMaterialsLinesV2<T>, T> {
    return new GetAllRequestBuilder<BillOfMaterialsLinesV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BillOfMaterialsLinesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BillOfMaterialsLinesV2`.
   */
  create(
    entity: BillOfMaterialsLinesV2<T>
  ): CreateRequestBuilder<BillOfMaterialsLinesV2<T>, T> {
    return new CreateRequestBuilder<BillOfMaterialsLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BillOfMaterialsLinesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link BillOfMaterialsLinesV2.dataAreaId}.
   * @param bomId Key property. See {@link BillOfMaterialsLinesV2.bomId}.
   * @param lineCreationSequenceNumber Key property. See {@link BillOfMaterialsLinesV2.lineCreationSequenceNumber}.
   * @returns A request builder for creating requests to retrieve one `BillOfMaterialsLinesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    bomId: DeserializedType<T, 'Edm.String'>,
    lineCreationSequenceNumber: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<BillOfMaterialsLinesV2<T>, T> {
    return new GetByKeyRequestBuilder<BillOfMaterialsLinesV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        BOMId: bomId,
        LineCreationSequenceNumber: lineCreationSequenceNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BillOfMaterialsLinesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BillOfMaterialsLinesV2`.
   */
  update(
    entity: BillOfMaterialsLinesV2<T>
  ): UpdateRequestBuilder<BillOfMaterialsLinesV2<T>, T> {
    return new UpdateRequestBuilder<BillOfMaterialsLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BillOfMaterialsLinesV2`.
   * @param dataAreaId Key property. See {@link BillOfMaterialsLinesV2.dataAreaId}.
   * @param bomId Key property. See {@link BillOfMaterialsLinesV2.bomId}.
   * @param lineCreationSequenceNumber Key property. See {@link BillOfMaterialsLinesV2.lineCreationSequenceNumber}.
   * @returns A request builder for creating requests that delete an entity of type `BillOfMaterialsLinesV2`.
   */
  delete(
    dataAreaId: string,
    bomId: string,
    lineCreationSequenceNumber: number
  ): DeleteRequestBuilder<BillOfMaterialsLinesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BillOfMaterialsLinesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BillOfMaterialsLinesV2` by taking the entity as a parameter.
   */
  delete(
    entity: BillOfMaterialsLinesV2<T>
  ): DeleteRequestBuilder<BillOfMaterialsLinesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    bomId?: string,
    lineCreationSequenceNumber?: number
  ): DeleteRequestBuilder<BillOfMaterialsLinesV2<T>, T> {
    return new DeleteRequestBuilder<BillOfMaterialsLinesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BillOfMaterialsLinesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BOMId: bomId!,
            LineCreationSequenceNumber: lineCreationSequenceNumber!
          }
    );
  }
}
