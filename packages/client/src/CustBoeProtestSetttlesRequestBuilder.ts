/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { CustBoeProtestSetttles } from './CustBoeProtestSetttles';

/**
 * Request builder class for operations supported on the {@link CustBoeProtestSetttles} entity.
 */
export class CustBoeProtestSetttlesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustBoeProtestSetttles<T>, T> {
  /**
   * Returns a request builder for querying all `CustBoeProtestSetttles` entities.
   * @returns A request builder for creating requests to retrieve all `CustBoeProtestSetttles` entities.
   */
  getAll(): GetAllRequestBuilder<CustBoeProtestSetttles<T>, T> {
    return new GetAllRequestBuilder<CustBoeProtestSetttles<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CustBoeProtestSetttles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustBoeProtestSetttles`.
   */
  create(
    entity: CustBoeProtestSetttles<T>
  ): CreateRequestBuilder<CustBoeProtestSetttles<T>, T> {
    return new CreateRequestBuilder<CustBoeProtestSetttles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustBoeProtestSetttles` entity based on its keys.
   * @param specTableId Key property. See {@link CustBoeProtestSetttles.specTableId}.
   * @param specRecId Key property. See {@link CustBoeProtestSetttles.specRecId}.
   * @param specCompany Key property. See {@link CustBoeProtestSetttles.specCompany}.
   * @returns A request builder for creating requests to retrieve one `CustBoeProtestSetttles` entity based on its keys.
   */
  getByKey(
    specTableId: DeserializedType<T, 'Edm.Int32'>,
    specRecId: DeserializedType<T, 'Edm.Int64'>,
    specCompany: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustBoeProtestSetttles<T>, T> {
    return new GetByKeyRequestBuilder<CustBoeProtestSetttles<T>, T>(
      this.entityApi,
      {
        SpecTableId: specTableId,
        SpecRecId: specRecId,
        SpecCompany: specCompany
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustBoeProtestSetttles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustBoeProtestSetttles`.
   */
  update(
    entity: CustBoeProtestSetttles<T>
  ): UpdateRequestBuilder<CustBoeProtestSetttles<T>, T> {
    return new UpdateRequestBuilder<CustBoeProtestSetttles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustBoeProtestSetttles`.
   * @param specTableId Key property. See {@link CustBoeProtestSetttles.specTableId}.
   * @param specRecId Key property. See {@link CustBoeProtestSetttles.specRecId}.
   * @param specCompany Key property. See {@link CustBoeProtestSetttles.specCompany}.
   * @returns A request builder for creating requests that delete an entity of type `CustBoeProtestSetttles`.
   */
  delete(
    specTableId: number,
    specRecId: BigNumber,
    specCompany: string
  ): DeleteRequestBuilder<CustBoeProtestSetttles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustBoeProtestSetttles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustBoeProtestSetttles` by taking the entity as a parameter.
   */
  delete(
    entity: CustBoeProtestSetttles<T>
  ): DeleteRequestBuilder<CustBoeProtestSetttles<T>, T>;
  delete(
    specTableIdOrEntity: any,
    specRecId?: BigNumber,
    specCompany?: string
  ): DeleteRequestBuilder<CustBoeProtestSetttles<T>, T> {
    return new DeleteRequestBuilder<CustBoeProtestSetttles<T>, T>(
      this.entityApi,
      specTableIdOrEntity instanceof CustBoeProtestSetttles
        ? specTableIdOrEntity
        : {
            SpecTableId: specTableIdOrEntity!,
            SpecRecId: specRecId!,
            SpecCompany: specCompany!
          }
    );
  }
}
