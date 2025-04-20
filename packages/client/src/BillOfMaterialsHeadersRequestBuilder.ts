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
import { BillOfMaterialsHeaders } from './BillOfMaterialsHeaders';

/**
 * Request builder class for operations supported on the {@link BillOfMaterialsHeaders} entity.
 */
export class BillOfMaterialsHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BillOfMaterialsHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `BillOfMaterialsHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `BillOfMaterialsHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<BillOfMaterialsHeaders<T>, T> {
    return new GetAllRequestBuilder<BillOfMaterialsHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BillOfMaterialsHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BillOfMaterialsHeaders`.
   */
  create(
    entity: BillOfMaterialsHeaders<T>
  ): CreateRequestBuilder<BillOfMaterialsHeaders<T>, T> {
    return new CreateRequestBuilder<BillOfMaterialsHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BillOfMaterialsHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link BillOfMaterialsHeaders.dataAreaId}.
   * @param bomId Key property. See {@link BillOfMaterialsHeaders.bomId}.
   * @returns A request builder for creating requests to retrieve one `BillOfMaterialsHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    bomId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BillOfMaterialsHeaders<T>, T> {
    return new GetByKeyRequestBuilder<BillOfMaterialsHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        BOMId: bomId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BillOfMaterialsHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BillOfMaterialsHeaders`.
   */
  update(
    entity: BillOfMaterialsHeaders<T>
  ): UpdateRequestBuilder<BillOfMaterialsHeaders<T>, T> {
    return new UpdateRequestBuilder<BillOfMaterialsHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BillOfMaterialsHeaders`.
   * @param dataAreaId Key property. See {@link BillOfMaterialsHeaders.dataAreaId}.
   * @param bomId Key property. See {@link BillOfMaterialsHeaders.bomId}.
   * @returns A request builder for creating requests that delete an entity of type `BillOfMaterialsHeaders`.
   */
  delete(
    dataAreaId: string,
    bomId: string
  ): DeleteRequestBuilder<BillOfMaterialsHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BillOfMaterialsHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BillOfMaterialsHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: BillOfMaterialsHeaders<T>
  ): DeleteRequestBuilder<BillOfMaterialsHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    bomId?: string
  ): DeleteRequestBuilder<BillOfMaterialsHeaders<T>, T> {
    return new DeleteRequestBuilder<BillOfMaterialsHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BillOfMaterialsHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BOMId: bomId!
          }
    );
  }
}
