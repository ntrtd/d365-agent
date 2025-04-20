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
import { BillOfMaterialsLinesV3 } from './BillOfMaterialsLinesV3';

/**
 * Request builder class for operations supported on the {@link BillOfMaterialsLinesV3} entity.
 */
export class BillOfMaterialsLinesV3RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BillOfMaterialsLinesV3<T>, T> {
  /**
   * Returns a request builder for querying all `BillOfMaterialsLinesV3` entities.
   * @returns A request builder for creating requests to retrieve all `BillOfMaterialsLinesV3` entities.
   */
  getAll(): GetAllRequestBuilder<BillOfMaterialsLinesV3<T>, T> {
    return new GetAllRequestBuilder<BillOfMaterialsLinesV3<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BillOfMaterialsLinesV3` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BillOfMaterialsLinesV3`.
   */
  create(
    entity: BillOfMaterialsLinesV3<T>
  ): CreateRequestBuilder<BillOfMaterialsLinesV3<T>, T> {
    return new CreateRequestBuilder<BillOfMaterialsLinesV3<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BillOfMaterialsLinesV3` entity based on its keys.
   * @param dataAreaId Key property. See {@link BillOfMaterialsLinesV3.dataAreaId}.
   * @param bomId Key property. See {@link BillOfMaterialsLinesV3.bomId}.
   * @param lineCreationSequenceNumber Key property. See {@link BillOfMaterialsLinesV3.lineCreationSequenceNumber}.
   * @returns A request builder for creating requests to retrieve one `BillOfMaterialsLinesV3` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    bomId: DeserializedType<T, 'Edm.String'>,
    lineCreationSequenceNumber: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<BillOfMaterialsLinesV3<T>, T> {
    return new GetByKeyRequestBuilder<BillOfMaterialsLinesV3<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        BOMId: bomId,
        LineCreationSequenceNumber: lineCreationSequenceNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BillOfMaterialsLinesV3`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BillOfMaterialsLinesV3`.
   */
  update(
    entity: BillOfMaterialsLinesV3<T>
  ): UpdateRequestBuilder<BillOfMaterialsLinesV3<T>, T> {
    return new UpdateRequestBuilder<BillOfMaterialsLinesV3<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BillOfMaterialsLinesV3`.
   * @param dataAreaId Key property. See {@link BillOfMaterialsLinesV3.dataAreaId}.
   * @param bomId Key property. See {@link BillOfMaterialsLinesV3.bomId}.
   * @param lineCreationSequenceNumber Key property. See {@link BillOfMaterialsLinesV3.lineCreationSequenceNumber}.
   * @returns A request builder for creating requests that delete an entity of type `BillOfMaterialsLinesV3`.
   */
  delete(
    dataAreaId: string,
    bomId: string,
    lineCreationSequenceNumber: number
  ): DeleteRequestBuilder<BillOfMaterialsLinesV3<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BillOfMaterialsLinesV3`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BillOfMaterialsLinesV3` by taking the entity as a parameter.
   */
  delete(
    entity: BillOfMaterialsLinesV3<T>
  ): DeleteRequestBuilder<BillOfMaterialsLinesV3<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    bomId?: string,
    lineCreationSequenceNumber?: number
  ): DeleteRequestBuilder<BillOfMaterialsLinesV3<T>, T> {
    return new DeleteRequestBuilder<BillOfMaterialsLinesV3<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BillOfMaterialsLinesV3
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BOMId: bomId!,
            LineCreationSequenceNumber: lineCreationSequenceNumber!
          }
    );
  }
}
