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
import { RetailOnlineChannelLanguages } from './RetailOnlineChannelLanguages';

/**
 * Request builder class for operations supported on the {@link RetailOnlineChannelLanguages} entity.
 */
export class RetailOnlineChannelLanguagesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailOnlineChannelLanguages<T>, T> {
  /**
   * Returns a request builder for querying all `RetailOnlineChannelLanguages` entities.
   * @returns A request builder for creating requests to retrieve all `RetailOnlineChannelLanguages` entities.
   */
  getAll(): GetAllRequestBuilder<RetailOnlineChannelLanguages<T>, T> {
    return new GetAllRequestBuilder<RetailOnlineChannelLanguages<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailOnlineChannelLanguages` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailOnlineChannelLanguages`.
   */
  create(
    entity: RetailOnlineChannelLanguages<T>
  ): CreateRequestBuilder<RetailOnlineChannelLanguages<T>, T> {
    return new CreateRequestBuilder<RetailOnlineChannelLanguages<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailOnlineChannelLanguages` entity based on its keys.
   * @param languageId Key property. See {@link RetailOnlineChannelLanguages.languageId}.
   * @param operatingUnitNumber Key property. See {@link RetailOnlineChannelLanguages.operatingUnitNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailOnlineChannelLanguages` entity based on its keys.
   */
  getByKey(
    languageId: DeserializedType<T, 'Edm.String'>,
    operatingUnitNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailOnlineChannelLanguages<T>, T> {
    return new GetByKeyRequestBuilder<RetailOnlineChannelLanguages<T>, T>(
      this.entityApi,
      {
        LanguageId: languageId,
        OperatingUnitNumber: operatingUnitNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailOnlineChannelLanguages`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailOnlineChannelLanguages`.
   */
  update(
    entity: RetailOnlineChannelLanguages<T>
  ): UpdateRequestBuilder<RetailOnlineChannelLanguages<T>, T> {
    return new UpdateRequestBuilder<RetailOnlineChannelLanguages<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailOnlineChannelLanguages`.
   * @param languageId Key property. See {@link RetailOnlineChannelLanguages.languageId}.
   * @param operatingUnitNumber Key property. See {@link RetailOnlineChannelLanguages.operatingUnitNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailOnlineChannelLanguages`.
   */
  delete(
    languageId: string,
    operatingUnitNumber: string
  ): DeleteRequestBuilder<RetailOnlineChannelLanguages<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailOnlineChannelLanguages`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailOnlineChannelLanguages` by taking the entity as a parameter.
   */
  delete(
    entity: RetailOnlineChannelLanguages<T>
  ): DeleteRequestBuilder<RetailOnlineChannelLanguages<T>, T>;
  delete(
    languageIdOrEntity: any,
    operatingUnitNumber?: string
  ): DeleteRequestBuilder<RetailOnlineChannelLanguages<T>, T> {
    return new DeleteRequestBuilder<RetailOnlineChannelLanguages<T>, T>(
      this.entityApi,
      languageIdOrEntity instanceof RetailOnlineChannelLanguages
        ? languageIdOrEntity
        : {
            LanguageId: languageIdOrEntity!,
            OperatingUnitNumber: operatingUnitNumber!
          }
    );
  }
}
