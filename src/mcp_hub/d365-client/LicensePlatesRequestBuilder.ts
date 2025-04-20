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
import { LicensePlates } from './LicensePlates';

/**
 * Request builder class for operations supported on the {@link LicensePlates} entity.
 */
export class LicensePlatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LicensePlates<T>, T> {
  /**
   * Returns a request builder for querying all `LicensePlates` entities.
   * @returns A request builder for creating requests to retrieve all `LicensePlates` entities.
   */
  getAll(): GetAllRequestBuilder<LicensePlates<T>, T> {
    return new GetAllRequestBuilder<LicensePlates<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LicensePlates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LicensePlates`.
   */
  create(entity: LicensePlates<T>): CreateRequestBuilder<LicensePlates<T>, T> {
    return new CreateRequestBuilder<LicensePlates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LicensePlates` entity based on its keys.
   * @param dataAreaId Key property. See {@link LicensePlates.dataAreaId}.
   * @param licensePlateNumber Key property. See {@link LicensePlates.licensePlateNumber}.
   * @returns A request builder for creating requests to retrieve one `LicensePlates` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    licensePlateNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LicensePlates<T>, T> {
    return new GetByKeyRequestBuilder<LicensePlates<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      LicensePlateNumber: licensePlateNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LicensePlates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LicensePlates`.
   */
  update(entity: LicensePlates<T>): UpdateRequestBuilder<LicensePlates<T>, T> {
    return new UpdateRequestBuilder<LicensePlates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LicensePlates`.
   * @param dataAreaId Key property. See {@link LicensePlates.dataAreaId}.
   * @param licensePlateNumber Key property. See {@link LicensePlates.licensePlateNumber}.
   * @returns A request builder for creating requests that delete an entity of type `LicensePlates`.
   */
  delete(
    dataAreaId: string,
    licensePlateNumber: string
  ): DeleteRequestBuilder<LicensePlates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LicensePlates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LicensePlates` by taking the entity as a parameter.
   */
  delete(entity: LicensePlates<T>): DeleteRequestBuilder<LicensePlates<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    licensePlateNumber?: string
  ): DeleteRequestBuilder<LicensePlates<T>, T> {
    return new DeleteRequestBuilder<LicensePlates<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LicensePlates
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LicensePlateNumber: licensePlateNumber!
          }
    );
  }
}
