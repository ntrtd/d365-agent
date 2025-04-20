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
import { CallCenterScripts } from './CallCenterScripts';

/**
 * Request builder class for operations supported on the {@link CallCenterScripts} entity.
 */
export class CallCenterScriptsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CallCenterScripts<T>, T> {
  /**
   * Returns a request builder for querying all `CallCenterScripts` entities.
   * @returns A request builder for creating requests to retrieve all `CallCenterScripts` entities.
   */
  getAll(): GetAllRequestBuilder<CallCenterScripts<T>, T> {
    return new GetAllRequestBuilder<CallCenterScripts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CallCenterScripts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CallCenterScripts`.
   */
  create(
    entity: CallCenterScripts<T>
  ): CreateRequestBuilder<CallCenterScripts<T>, T> {
    return new CreateRequestBuilder<CallCenterScripts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CallCenterScripts` entity based on its keys.
   * @param dataAreaId Key property. See {@link CallCenterScripts.dataAreaId}.
   * @param languageId Key property. See {@link CallCenterScripts.languageId}.
   * @param scriptTitle Key property. See {@link CallCenterScripts.scriptTitle}.
   * @returns A request builder for creating requests to retrieve one `CallCenterScripts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    languageId: DeserializedType<T, 'Edm.String'>,
    scriptTitle: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CallCenterScripts<T>, T> {
    return new GetByKeyRequestBuilder<CallCenterScripts<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      LanguageId: languageId,
      ScriptTitle: scriptTitle
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CallCenterScripts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CallCenterScripts`.
   */
  update(
    entity: CallCenterScripts<T>
  ): UpdateRequestBuilder<CallCenterScripts<T>, T> {
    return new UpdateRequestBuilder<CallCenterScripts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CallCenterScripts`.
   * @param dataAreaId Key property. See {@link CallCenterScripts.dataAreaId}.
   * @param languageId Key property. See {@link CallCenterScripts.languageId}.
   * @param scriptTitle Key property. See {@link CallCenterScripts.scriptTitle}.
   * @returns A request builder for creating requests that delete an entity of type `CallCenterScripts`.
   */
  delete(
    dataAreaId: string,
    languageId: string,
    scriptTitle: string
  ): DeleteRequestBuilder<CallCenterScripts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CallCenterScripts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CallCenterScripts` by taking the entity as a parameter.
   */
  delete(
    entity: CallCenterScripts<T>
  ): DeleteRequestBuilder<CallCenterScripts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    languageId?: string,
    scriptTitle?: string
  ): DeleteRequestBuilder<CallCenterScripts<T>, T> {
    return new DeleteRequestBuilder<CallCenterScripts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CallCenterScripts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LanguageId: languageId!,
            ScriptTitle: scriptTitle!
          }
    );
  }
}
