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
import { PsnCashPositionColumnSetup } from './PsnCashPositionColumnSetup';

/**
 * Request builder class for operations supported on the {@link PsnCashPositionColumnSetup} entity.
 */
export class PsnCashPositionColumnSetupRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PsnCashPositionColumnSetup<T>, T> {
  /**
   * Returns a request builder for querying all `PsnCashPositionColumnSetup` entities.
   * @returns A request builder for creating requests to retrieve all `PsnCashPositionColumnSetup` entities.
   */
  getAll(): GetAllRequestBuilder<PsnCashPositionColumnSetup<T>, T> {
    return new GetAllRequestBuilder<PsnCashPositionColumnSetup<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PsnCashPositionColumnSetup` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PsnCashPositionColumnSetup`.
   */
  create(
    entity: PsnCashPositionColumnSetup<T>
  ): CreateRequestBuilder<PsnCashPositionColumnSetup<T>, T> {
    return new CreateRequestBuilder<PsnCashPositionColumnSetup<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PsnCashPositionColumnSetup` entity based on its keys.
   * @param dataAreaId Key property. See {@link PsnCashPositionColumnSetup.dataAreaId}.
   * @param key Key property. See {@link PsnCashPositionColumnSetup.key}.
   * @returns A request builder for creating requests to retrieve one `PsnCashPositionColumnSetup` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    key: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<PsnCashPositionColumnSetup<T>, T> {
    return new GetByKeyRequestBuilder<PsnCashPositionColumnSetup<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Key: key
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PsnCashPositionColumnSetup`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PsnCashPositionColumnSetup`.
   */
  update(
    entity: PsnCashPositionColumnSetup<T>
  ): UpdateRequestBuilder<PsnCashPositionColumnSetup<T>, T> {
    return new UpdateRequestBuilder<PsnCashPositionColumnSetup<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PsnCashPositionColumnSetup`.
   * @param dataAreaId Key property. See {@link PsnCashPositionColumnSetup.dataAreaId}.
   * @param key Key property. See {@link PsnCashPositionColumnSetup.key}.
   * @returns A request builder for creating requests that delete an entity of type `PsnCashPositionColumnSetup`.
   */
  delete(
    dataAreaId: string,
    key: number
  ): DeleteRequestBuilder<PsnCashPositionColumnSetup<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PsnCashPositionColumnSetup`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PsnCashPositionColumnSetup` by taking the entity as a parameter.
   */
  delete(
    entity: PsnCashPositionColumnSetup<T>
  ): DeleteRequestBuilder<PsnCashPositionColumnSetup<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    key?: number
  ): DeleteRequestBuilder<PsnCashPositionColumnSetup<T>, T> {
    return new DeleteRequestBuilder<PsnCashPositionColumnSetup<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PsnCashPositionColumnSetup
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Key: key!
          }
    );
  }
}
