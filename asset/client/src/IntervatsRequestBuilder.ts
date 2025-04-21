/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { Intervats } from './Intervats';

/**
 * Request builder class for operations supported on the {@link Intervats} entity.
 */
export class IntervatsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Intervats<T>, T> {
  /**
   * Returns a request builder for querying all `Intervats` entities.
   * @returns A request builder for creating requests to retrieve all `Intervats` entities.
   */
  getAll(): GetAllRequestBuilder<Intervats<T>, T> {
    return new GetAllRequestBuilder<Intervats<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Intervats` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Intervats`.
   */
  create(entity: Intervats<T>): CreateRequestBuilder<Intervats<T>, T> {
    return new CreateRequestBuilder<Intervats<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Intervats` entity based on its keys.
   * @param dataAreaId Key property. See {@link Intervats.dataAreaId}.
   * @param intervatId Key property. See {@link Intervats.intervatId}.
   * @param validFrom Key property. See {@link Intervats.validFrom}.
   * @param validTo Key property. See {@link Intervats.validTo}.
   * @returns A request builder for creating requests to retrieve one `Intervats` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    intervatId: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<Intervats<T>, T> {
    return new GetByKeyRequestBuilder<Intervats<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      IntervatId: intervatId,
      ValidFrom: validFrom,
      ValidTo: validTo
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Intervats`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Intervats`.
   */
  update(entity: Intervats<T>): UpdateRequestBuilder<Intervats<T>, T> {
    return new UpdateRequestBuilder<Intervats<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Intervats`.
   * @param dataAreaId Key property. See {@link Intervats.dataAreaId}.
   * @param intervatId Key property. See {@link Intervats.intervatId}.
   * @param validFrom Key property. See {@link Intervats.validFrom}.
   * @param validTo Key property. See {@link Intervats.validTo}.
   * @returns A request builder for creating requests that delete an entity of type `Intervats`.
   */
  delete(
    dataAreaId: string,
    intervatId: string,
    validFrom: Moment,
    validTo: Moment
  ): DeleteRequestBuilder<Intervats<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Intervats`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Intervats` by taking the entity as a parameter.
   */
  delete(entity: Intervats<T>): DeleteRequestBuilder<Intervats<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    intervatId?: string,
    validFrom?: Moment,
    validTo?: Moment
  ): DeleteRequestBuilder<Intervats<T>, T> {
    return new DeleteRequestBuilder<Intervats<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof Intervats
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            IntervatId: intervatId!,
            ValidFrom: validFrom!,
            ValidTo: validTo!
          }
    );
  }
}
