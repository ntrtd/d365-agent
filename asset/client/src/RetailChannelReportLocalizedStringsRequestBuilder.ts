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
import { RetailChannelReportLocalizedStrings } from './RetailChannelReportLocalizedStrings';

/**
 * Request builder class for operations supported on the {@link RetailChannelReportLocalizedStrings} entity.
 */
export class RetailChannelReportLocalizedStringsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailChannelReportLocalizedStrings<T>, T> {
  /**
   * Returns a request builder for querying all `RetailChannelReportLocalizedStrings` entities.
   * @returns A request builder for creating requests to retrieve all `RetailChannelReportLocalizedStrings` entities.
   */
  getAll(): GetAllRequestBuilder<RetailChannelReportLocalizedStrings<T>, T> {
    return new GetAllRequestBuilder<RetailChannelReportLocalizedStrings<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailChannelReportLocalizedStrings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailChannelReportLocalizedStrings`.
   */
  create(
    entity: RetailChannelReportLocalizedStrings<T>
  ): CreateRequestBuilder<RetailChannelReportLocalizedStrings<T>, T> {
    return new CreateRequestBuilder<RetailChannelReportLocalizedStrings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailChannelReportLocalizedStrings` entity based on its keys.
   * @param localeCode Key property. See {@link RetailChannelReportLocalizedStrings.localeCode}.
   * @param stringId Key property. See {@link RetailChannelReportLocalizedStrings.stringId}.
   * @returns A request builder for creating requests to retrieve one `RetailChannelReportLocalizedStrings` entity based on its keys.
   */
  getByKey(
    localeCode: DeserializedType<T, 'Edm.String'>,
    stringId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailChannelReportLocalizedStrings<T>, T> {
    return new GetByKeyRequestBuilder<
      RetailChannelReportLocalizedStrings<T>,
      T
    >(this.entityApi, {
      LocaleCode: localeCode,
      StringId: stringId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailChannelReportLocalizedStrings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailChannelReportLocalizedStrings`.
   */
  update(
    entity: RetailChannelReportLocalizedStrings<T>
  ): UpdateRequestBuilder<RetailChannelReportLocalizedStrings<T>, T> {
    return new UpdateRequestBuilder<RetailChannelReportLocalizedStrings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailChannelReportLocalizedStrings`.
   * @param localeCode Key property. See {@link RetailChannelReportLocalizedStrings.localeCode}.
   * @param stringId Key property. See {@link RetailChannelReportLocalizedStrings.stringId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailChannelReportLocalizedStrings`.
   */
  delete(
    localeCode: string,
    stringId: string
  ): DeleteRequestBuilder<RetailChannelReportLocalizedStrings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailChannelReportLocalizedStrings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailChannelReportLocalizedStrings` by taking the entity as a parameter.
   */
  delete(
    entity: RetailChannelReportLocalizedStrings<T>
  ): DeleteRequestBuilder<RetailChannelReportLocalizedStrings<T>, T>;
  delete(
    localeCodeOrEntity: any,
    stringId?: string
  ): DeleteRequestBuilder<RetailChannelReportLocalizedStrings<T>, T> {
    return new DeleteRequestBuilder<RetailChannelReportLocalizedStrings<T>, T>(
      this.entityApi,
      localeCodeOrEntity instanceof RetailChannelReportLocalizedStrings
        ? localeCodeOrEntity
        : {
            LocaleCode: localeCodeOrEntity!,
            StringId: stringId!
          }
    );
  }
}
