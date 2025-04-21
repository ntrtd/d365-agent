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
import { FiscalPrinters } from './FiscalPrinters';

/**
 * Request builder class for operations supported on the {@link FiscalPrinters} entity.
 */
export class FiscalPrintersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FiscalPrinters<T>, T> {
  /**
   * Returns a request builder for querying all `FiscalPrinters` entities.
   * @returns A request builder for creating requests to retrieve all `FiscalPrinters` entities.
   */
  getAll(): GetAllRequestBuilder<FiscalPrinters<T>, T> {
    return new GetAllRequestBuilder<FiscalPrinters<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FiscalPrinters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FiscalPrinters`.
   */
  create(
    entity: FiscalPrinters<T>
  ): CreateRequestBuilder<FiscalPrinters<T>, T> {
    return new CreateRequestBuilder<FiscalPrinters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FiscalPrinters` entity based on its keys.
   * @param dataAreaId Key property. See {@link FiscalPrinters.dataAreaId}.
   * @param code Key property. See {@link FiscalPrinters.code}.
   * @returns A request builder for creating requests to retrieve one `FiscalPrinters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FiscalPrinters<T>, T> {
    return new GetByKeyRequestBuilder<FiscalPrinters<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Code: code
    });
  }

  /**
   * Returns a request builder for updating an entity of type `FiscalPrinters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FiscalPrinters`.
   */
  update(
    entity: FiscalPrinters<T>
  ): UpdateRequestBuilder<FiscalPrinters<T>, T> {
    return new UpdateRequestBuilder<FiscalPrinters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FiscalPrinters`.
   * @param dataAreaId Key property. See {@link FiscalPrinters.dataAreaId}.
   * @param code Key property. See {@link FiscalPrinters.code}.
   * @returns A request builder for creating requests that delete an entity of type `FiscalPrinters`.
   */
  delete(
    dataAreaId: string,
    code: string
  ): DeleteRequestBuilder<FiscalPrinters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FiscalPrinters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FiscalPrinters` by taking the entity as a parameter.
   */
  delete(entity: FiscalPrinters<T>): DeleteRequestBuilder<FiscalPrinters<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    code?: string
  ): DeleteRequestBuilder<FiscalPrinters<T>, T> {
    return new DeleteRequestBuilder<FiscalPrinters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof FiscalPrinters
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Code: code!
          }
    );
  }
}
