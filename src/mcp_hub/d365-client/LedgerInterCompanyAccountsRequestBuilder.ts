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
import { LedgerInterCompanyAccounts } from './LedgerInterCompanyAccounts';

/**
 * Request builder class for operations supported on the {@link LedgerInterCompanyAccounts} entity.
 */
export class LedgerInterCompanyAccountsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LedgerInterCompanyAccounts<T>, T> {
  /**
   * Returns a request builder for querying all `LedgerInterCompanyAccounts` entities.
   * @returns A request builder for creating requests to retrieve all `LedgerInterCompanyAccounts` entities.
   */
  getAll(): GetAllRequestBuilder<LedgerInterCompanyAccounts<T>, T> {
    return new GetAllRequestBuilder<LedgerInterCompanyAccounts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LedgerInterCompanyAccounts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LedgerInterCompanyAccounts`.
   */
  create(
    entity: LedgerInterCompanyAccounts<T>
  ): CreateRequestBuilder<LedgerInterCompanyAccounts<T>, T> {
    return new CreateRequestBuilder<LedgerInterCompanyAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LedgerInterCompanyAccounts` entity based on its keys.
   * @param originatingLegalEntityId Key property. See {@link LedgerInterCompanyAccounts.originatingLegalEntityId}.
   * @param destinationLegalEntityId Key property. See {@link LedgerInterCompanyAccounts.destinationLegalEntityId}.
   * @returns A request builder for creating requests to retrieve one `LedgerInterCompanyAccounts` entity based on its keys.
   */
  getByKey(
    originatingLegalEntityId: DeserializedType<T, 'Edm.String'>,
    destinationLegalEntityId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LedgerInterCompanyAccounts<T>, T> {
    return new GetByKeyRequestBuilder<LedgerInterCompanyAccounts<T>, T>(
      this.entityApi,
      {
        OriginatingLegalEntityId: originatingLegalEntityId,
        DestinationLegalEntityId: destinationLegalEntityId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LedgerInterCompanyAccounts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LedgerInterCompanyAccounts`.
   */
  update(
    entity: LedgerInterCompanyAccounts<T>
  ): UpdateRequestBuilder<LedgerInterCompanyAccounts<T>, T> {
    return new UpdateRequestBuilder<LedgerInterCompanyAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LedgerInterCompanyAccounts`.
   * @param originatingLegalEntityId Key property. See {@link LedgerInterCompanyAccounts.originatingLegalEntityId}.
   * @param destinationLegalEntityId Key property. See {@link LedgerInterCompanyAccounts.destinationLegalEntityId}.
   * @returns A request builder for creating requests that delete an entity of type `LedgerInterCompanyAccounts`.
   */
  delete(
    originatingLegalEntityId: string,
    destinationLegalEntityId: string
  ): DeleteRequestBuilder<LedgerInterCompanyAccounts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LedgerInterCompanyAccounts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LedgerInterCompanyAccounts` by taking the entity as a parameter.
   */
  delete(
    entity: LedgerInterCompanyAccounts<T>
  ): DeleteRequestBuilder<LedgerInterCompanyAccounts<T>, T>;
  delete(
    originatingLegalEntityIdOrEntity: any,
    destinationLegalEntityId?: string
  ): DeleteRequestBuilder<LedgerInterCompanyAccounts<T>, T> {
    return new DeleteRequestBuilder<LedgerInterCompanyAccounts<T>, T>(
      this.entityApi,
      originatingLegalEntityIdOrEntity instanceof LedgerInterCompanyAccounts
        ? originatingLegalEntityIdOrEntity
        : {
            OriginatingLegalEntityId: originatingLegalEntityIdOrEntity!,
            DestinationLegalEntityId: destinationLegalEntityId!
          }
    );
  }
}
