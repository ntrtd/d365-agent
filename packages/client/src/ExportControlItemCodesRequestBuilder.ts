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
import { ExportControlItemCodes } from './ExportControlItemCodes';

/**
 * Request builder class for operations supported on the {@link ExportControlItemCodes} entity.
 */
export class ExportControlItemCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExportControlItemCodes<T>, T> {
  /**
   * Returns a request builder for querying all `ExportControlItemCodes` entities.
   * @returns A request builder for creating requests to retrieve all `ExportControlItemCodes` entities.
   */
  getAll(): GetAllRequestBuilder<ExportControlItemCodes<T>, T> {
    return new GetAllRequestBuilder<ExportControlItemCodes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ExportControlItemCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExportControlItemCodes`.
   */
  create(
    entity: ExportControlItemCodes<T>
  ): CreateRequestBuilder<ExportControlItemCodes<T>, T> {
    return new CreateRequestBuilder<ExportControlItemCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExportControlItemCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link ExportControlItemCodes.dataAreaId}.
   * @param jurisdiction Key property. See {@link ExportControlItemCodes.jurisdiction}.
   * @param itemId Key property. See {@link ExportControlItemCodes.itemId}.
   * @returns A request builder for creating requests to retrieve one `ExportControlItemCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    jurisdiction: DeserializedType<T, 'Edm.String'>,
    itemId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ExportControlItemCodes<T>, T> {
    return new GetByKeyRequestBuilder<ExportControlItemCodes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Jurisdiction: jurisdiction,
        ItemId: itemId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ExportControlItemCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExportControlItemCodes`.
   */
  update(
    entity: ExportControlItemCodes<T>
  ): UpdateRequestBuilder<ExportControlItemCodes<T>, T> {
    return new UpdateRequestBuilder<ExportControlItemCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExportControlItemCodes`.
   * @param dataAreaId Key property. See {@link ExportControlItemCodes.dataAreaId}.
   * @param jurisdiction Key property. See {@link ExportControlItemCodes.jurisdiction}.
   * @param itemId Key property. See {@link ExportControlItemCodes.itemId}.
   * @returns A request builder for creating requests that delete an entity of type `ExportControlItemCodes`.
   */
  delete(
    dataAreaId: string,
    jurisdiction: string,
    itemId: string
  ): DeleteRequestBuilder<ExportControlItemCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExportControlItemCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExportControlItemCodes` by taking the entity as a parameter.
   */
  delete(
    entity: ExportControlItemCodes<T>
  ): DeleteRequestBuilder<ExportControlItemCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    jurisdiction?: string,
    itemId?: string
  ): DeleteRequestBuilder<ExportControlItemCodes<T>, T> {
    return new DeleteRequestBuilder<ExportControlItemCodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ExportControlItemCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Jurisdiction: jurisdiction!,
            ItemId: itemId!
          }
    );
  }
}
