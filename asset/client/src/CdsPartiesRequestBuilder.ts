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
import { CdsParties } from './CdsParties';

/**
 * Request builder class for operations supported on the {@link CdsParties} entity.
 */
export class CdsPartiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CdsParties<T>, T> {
  /**
   * Returns a request builder for querying all `CdsParties` entities.
   * @returns A request builder for creating requests to retrieve all `CdsParties` entities.
   */
  getAll(): GetAllRequestBuilder<CdsParties<T>, T> {
    return new GetAllRequestBuilder<CdsParties<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CdsParties` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CdsParties`.
   */
  create(entity: CdsParties<T>): CreateRequestBuilder<CdsParties<T>, T> {
    return new CreateRequestBuilder<CdsParties<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CdsParties` entity based on its keys.
   * @param partyNumber Key property. See {@link CdsParties.partyNumber}.
   * @returns A request builder for creating requests to retrieve one `CdsParties` entity based on its keys.
   */
  getByKey(
    partyNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CdsParties<T>, T> {
    return new GetByKeyRequestBuilder<CdsParties<T>, T>(this.entityApi, {
      PartyNumber: partyNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CdsParties`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CdsParties`.
   */
  update(entity: CdsParties<T>): UpdateRequestBuilder<CdsParties<T>, T> {
    return new UpdateRequestBuilder<CdsParties<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CdsParties`.
   * @param partyNumber Key property. See {@link CdsParties.partyNumber}.
   * @returns A request builder for creating requests that delete an entity of type `CdsParties`.
   */
  delete(partyNumber: string): DeleteRequestBuilder<CdsParties<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CdsParties`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CdsParties` by taking the entity as a parameter.
   */
  delete(entity: CdsParties<T>): DeleteRequestBuilder<CdsParties<T>, T>;
  delete(partyNumberOrEntity: any): DeleteRequestBuilder<CdsParties<T>, T> {
    return new DeleteRequestBuilder<CdsParties<T>, T>(
      this.entityApi,
      partyNumberOrEntity instanceof CdsParties
        ? partyNumberOrEntity
        : { PartyNumber: partyNumberOrEntity! }
    );
  }
}
