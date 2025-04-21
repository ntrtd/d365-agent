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
import { Abbreviations } from './Abbreviations';

/**
 * Request builder class for operations supported on the {@link Abbreviations} entity.
 */
export class AbbreviationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Abbreviations<T>, T> {
  /**
   * Returns a request builder for querying all `Abbreviations` entities.
   * @returns A request builder for creating requests to retrieve all `Abbreviations` entities.
   */
  getAll(): GetAllRequestBuilder<Abbreviations<T>, T> {
    return new GetAllRequestBuilder<Abbreviations<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Abbreviations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Abbreviations`.
   */
  create(entity: Abbreviations<T>): CreateRequestBuilder<Abbreviations<T>, T> {
    return new CreateRequestBuilder<Abbreviations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `Abbreviations` entity based on its keys.
   * @param addrTypeCode Key property. See {@link Abbreviations.addrTypeCode}.
   * @returns A request builder for creating requests to retrieve one `Abbreviations` entity based on its keys.
   */
  getByKey(
    addrTypeCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Abbreviations<T>, T> {
    return new GetByKeyRequestBuilder<Abbreviations<T>, T>(this.entityApi, {
      AddrTypeCode: addrTypeCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Abbreviations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Abbreviations`.
   */
  update(entity: Abbreviations<T>): UpdateRequestBuilder<Abbreviations<T>, T> {
    return new UpdateRequestBuilder<Abbreviations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `Abbreviations`.
   * @param addrTypeCode Key property. See {@link Abbreviations.addrTypeCode}.
   * @returns A request builder for creating requests that delete an entity of type `Abbreviations`.
   */
  delete(addrTypeCode: string): DeleteRequestBuilder<Abbreviations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Abbreviations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Abbreviations` by taking the entity as a parameter.
   */
  delete(entity: Abbreviations<T>): DeleteRequestBuilder<Abbreviations<T>, T>;
  delete(addrTypeCodeOrEntity: any): DeleteRequestBuilder<Abbreviations<T>, T> {
    return new DeleteRequestBuilder<Abbreviations<T>, T>(
      this.entityApi,
      addrTypeCodeOrEntity instanceof Abbreviations
        ? addrTypeCodeOrEntity
        : { AddrTypeCode: addrTypeCodeOrEntity! }
    );
  }
}
