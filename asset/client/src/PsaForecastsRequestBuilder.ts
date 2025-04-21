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
import { PsaForecasts } from './PsaForecasts';

/**
 * Request builder class for operations supported on the {@link PsaForecasts} entity.
 */
export class PsaForecastsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PsaForecasts<T>, T> {
  /**
   * Returns a request builder for querying all `PsaForecasts` entities.
   * @returns A request builder for creating requests to retrieve all `PsaForecasts` entities.
   */
  getAll(): GetAllRequestBuilder<PsaForecasts<T>, T> {
    return new GetAllRequestBuilder<PsaForecasts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PsaForecasts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PsaForecasts`.
   */
  create(entity: PsaForecasts<T>): CreateRequestBuilder<PsaForecasts<T>, T> {
    return new CreateRequestBuilder<PsaForecasts<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `PsaForecasts` entity based on its keys.
   * @param dataAreaId Key property. See {@link PsaForecasts.dataAreaId}.
   * @param transId Key property. See {@link PsaForecasts.transId}.
   * @returns A request builder for creating requests to retrieve one `PsaForecasts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    transId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PsaForecasts<T>, T> {
    return new GetByKeyRequestBuilder<PsaForecasts<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      TransId: transId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PsaForecasts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PsaForecasts`.
   */
  update(entity: PsaForecasts<T>): UpdateRequestBuilder<PsaForecasts<T>, T> {
    return new UpdateRequestBuilder<PsaForecasts<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PsaForecasts`.
   * @param dataAreaId Key property. See {@link PsaForecasts.dataAreaId}.
   * @param transId Key property. See {@link PsaForecasts.transId}.
   * @returns A request builder for creating requests that delete an entity of type `PsaForecasts`.
   */
  delete(
    dataAreaId: string,
    transId: string
  ): DeleteRequestBuilder<PsaForecasts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PsaForecasts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PsaForecasts` by taking the entity as a parameter.
   */
  delete(entity: PsaForecasts<T>): DeleteRequestBuilder<PsaForecasts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    transId?: string
  ): DeleteRequestBuilder<PsaForecasts<T>, T> {
    return new DeleteRequestBuilder<PsaForecasts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PsaForecasts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TransId: transId!
          }
    );
  }
}
