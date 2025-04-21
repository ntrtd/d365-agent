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
import { Accountants } from './Accountants';

/**
 * Request builder class for operations supported on the {@link Accountants} entity.
 */
export class AccountantsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Accountants<T>, T> {
  /**
   * Returns a request builder for querying all `Accountants` entities.
   * @returns A request builder for creating requests to retrieve all `Accountants` entities.
   */
  getAll(): GetAllRequestBuilder<Accountants<T>, T> {
    return new GetAllRequestBuilder<Accountants<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Accountants` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Accountants`.
   */
  create(entity: Accountants<T>): CreateRequestBuilder<Accountants<T>, T> {
    return new CreateRequestBuilder<Accountants<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Accountants` entity based on its keys.
   * @param cpf Key property. See {@link Accountants.cpf}.
   * @param crc Key property. See {@link Accountants.crc}.
   * @returns A request builder for creating requests to retrieve one `Accountants` entity based on its keys.
   */
  getByKey(
    cpf: DeserializedType<T, 'Edm.String'>,
    crc: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Accountants<T>, T> {
    return new GetByKeyRequestBuilder<Accountants<T>, T>(this.entityApi, {
      CPF: cpf,
      CRC: crc
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Accountants`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Accountants`.
   */
  update(entity: Accountants<T>): UpdateRequestBuilder<Accountants<T>, T> {
    return new UpdateRequestBuilder<Accountants<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Accountants`.
   * @param cpf Key property. See {@link Accountants.cpf}.
   * @param crc Key property. See {@link Accountants.crc}.
   * @returns A request builder for creating requests that delete an entity of type `Accountants`.
   */
  delete(cpf: string, crc: string): DeleteRequestBuilder<Accountants<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Accountants`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Accountants` by taking the entity as a parameter.
   */
  delete(entity: Accountants<T>): DeleteRequestBuilder<Accountants<T>, T>;
  delete(
    cpfOrEntity: any,
    crc?: string
  ): DeleteRequestBuilder<Accountants<T>, T> {
    return new DeleteRequestBuilder<Accountants<T>, T>(
      this.entityApi,
      cpfOrEntity instanceof Accountants
        ? cpfOrEntity
        : {
            CPF: cpfOrEntity!,
            CRC: crc!
          }
    );
  }
}
