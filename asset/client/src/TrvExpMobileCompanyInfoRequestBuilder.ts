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
import { TrvExpMobileCompanyInfo } from './TrvExpMobileCompanyInfo';

/**
 * Request builder class for operations supported on the {@link TrvExpMobileCompanyInfo} entity.
 */
export class TrvExpMobileCompanyInfoRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TrvExpMobileCompanyInfo<T>, T> {
  /**
   * Returns a request builder for querying all `TrvExpMobileCompanyInfo` entities.
   * @returns A request builder for creating requests to retrieve all `TrvExpMobileCompanyInfo` entities.
   */
  getAll(): GetAllRequestBuilder<TrvExpMobileCompanyInfo<T>, T> {
    return new GetAllRequestBuilder<TrvExpMobileCompanyInfo<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TrvExpMobileCompanyInfo` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TrvExpMobileCompanyInfo`.
   */
  create(
    entity: TrvExpMobileCompanyInfo<T>
  ): CreateRequestBuilder<TrvExpMobileCompanyInfo<T>, T> {
    return new CreateRequestBuilder<TrvExpMobileCompanyInfo<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TrvExpMobileCompanyInfo` entity based on its keys.
   * @param partyId Key property. See {@link TrvExpMobileCompanyInfo.partyId}.
   * @returns A request builder for creating requests to retrieve one `TrvExpMobileCompanyInfo` entity based on its keys.
   */
  getByKey(
    partyId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TrvExpMobileCompanyInfo<T>, T> {
    return new GetByKeyRequestBuilder<TrvExpMobileCompanyInfo<T>, T>(
      this.entityApi,
      { PartyID: partyId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TrvExpMobileCompanyInfo`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TrvExpMobileCompanyInfo`.
   */
  update(
    entity: TrvExpMobileCompanyInfo<T>
  ): UpdateRequestBuilder<TrvExpMobileCompanyInfo<T>, T> {
    return new UpdateRequestBuilder<TrvExpMobileCompanyInfo<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TrvExpMobileCompanyInfo`.
   * @param partyId Key property. See {@link TrvExpMobileCompanyInfo.partyId}.
   * @returns A request builder for creating requests that delete an entity of type `TrvExpMobileCompanyInfo`.
   */
  delete(partyId: string): DeleteRequestBuilder<TrvExpMobileCompanyInfo<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TrvExpMobileCompanyInfo`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TrvExpMobileCompanyInfo` by taking the entity as a parameter.
   */
  delete(
    entity: TrvExpMobileCompanyInfo<T>
  ): DeleteRequestBuilder<TrvExpMobileCompanyInfo<T>, T>;
  delete(
    partyIdOrEntity: any
  ): DeleteRequestBuilder<TrvExpMobileCompanyInfo<T>, T> {
    return new DeleteRequestBuilder<TrvExpMobileCompanyInfo<T>, T>(
      this.entityApi,
      partyIdOrEntity instanceof TrvExpMobileCompanyInfo
        ? partyIdOrEntity
        : { PartyID: partyIdOrEntity! }
    );
  }
}
