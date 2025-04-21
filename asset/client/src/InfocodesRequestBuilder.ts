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
import { Infocodes } from './Infocodes';

/**
 * Request builder class for operations supported on the {@link Infocodes} entity.
 */
export class InfocodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Infocodes<T>, T> {
  /**
   * Returns a request builder for querying all `Infocodes` entities.
   * @returns A request builder for creating requests to retrieve all `Infocodes` entities.
   */
  getAll(): GetAllRequestBuilder<Infocodes<T>, T> {
    return new GetAllRequestBuilder<Infocodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Infocodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Infocodes`.
   */
  create(entity: Infocodes<T>): CreateRequestBuilder<Infocodes<T>, T> {
    return new CreateRequestBuilder<Infocodes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Infocodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link Infocodes.dataAreaId}.
   * @param infocodeNumber Key property. See {@link Infocodes.infocodeNumber}.
   * @returns A request builder for creating requests to retrieve one `Infocodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    infocodeNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Infocodes<T>, T> {
    return new GetByKeyRequestBuilder<Infocodes<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      InfocodeNumber: infocodeNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Infocodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Infocodes`.
   */
  update(entity: Infocodes<T>): UpdateRequestBuilder<Infocodes<T>, T> {
    return new UpdateRequestBuilder<Infocodes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Infocodes`.
   * @param dataAreaId Key property. See {@link Infocodes.dataAreaId}.
   * @param infocodeNumber Key property. See {@link Infocodes.infocodeNumber}.
   * @returns A request builder for creating requests that delete an entity of type `Infocodes`.
   */
  delete(
    dataAreaId: string,
    infocodeNumber: string
  ): DeleteRequestBuilder<Infocodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Infocodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Infocodes` by taking the entity as a parameter.
   */
  delete(entity: Infocodes<T>): DeleteRequestBuilder<Infocodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    infocodeNumber?: string
  ): DeleteRequestBuilder<Infocodes<T>, T> {
    return new DeleteRequestBuilder<Infocodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof Infocodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InfocodeNumber: infocodeNumber!
          }
    );
  }
}
