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
import { InfoCodeFiscalTexts } from './InfoCodeFiscalTexts';

/**
 * Request builder class for operations supported on the {@link InfoCodeFiscalTexts} entity.
 */
export class InfoCodeFiscalTextsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InfoCodeFiscalTexts<T>, T> {
  /**
   * Returns a request builder for querying all `InfoCodeFiscalTexts` entities.
   * @returns A request builder for creating requests to retrieve all `InfoCodeFiscalTexts` entities.
   */
  getAll(): GetAllRequestBuilder<InfoCodeFiscalTexts<T>, T> {
    return new GetAllRequestBuilder<InfoCodeFiscalTexts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `InfoCodeFiscalTexts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InfoCodeFiscalTexts`.
   */
  create(
    entity: InfoCodeFiscalTexts<T>
  ): CreateRequestBuilder<InfoCodeFiscalTexts<T>, T> {
    return new CreateRequestBuilder<InfoCodeFiscalTexts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InfoCodeFiscalTexts` entity based on its keys.
   * @param dataAreaId Key property. See {@link InfoCodeFiscalTexts.dataAreaId}.
   * @param infoCodeNumber Key property. See {@link InfoCodeFiscalTexts.infoCodeNumber}.
   * @param subcodeNumber Key property. See {@link InfoCodeFiscalTexts.subcodeNumber}.
   * @param connectorGroupNumber Key property. See {@link InfoCodeFiscalTexts.connectorGroupNumber}.
   * @returns A request builder for creating requests to retrieve one `InfoCodeFiscalTexts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    infoCodeNumber: DeserializedType<T, 'Edm.String'>,
    subcodeNumber: DeserializedType<T, 'Edm.String'>,
    connectorGroupNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InfoCodeFiscalTexts<T>, T> {
    return new GetByKeyRequestBuilder<InfoCodeFiscalTexts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        InfoCodeNumber: infoCodeNumber,
        SubcodeNumber: subcodeNumber,
        ConnectorGroupNumber: connectorGroupNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InfoCodeFiscalTexts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InfoCodeFiscalTexts`.
   */
  update(
    entity: InfoCodeFiscalTexts<T>
  ): UpdateRequestBuilder<InfoCodeFiscalTexts<T>, T> {
    return new UpdateRequestBuilder<InfoCodeFiscalTexts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InfoCodeFiscalTexts`.
   * @param dataAreaId Key property. See {@link InfoCodeFiscalTexts.dataAreaId}.
   * @param infoCodeNumber Key property. See {@link InfoCodeFiscalTexts.infoCodeNumber}.
   * @param subcodeNumber Key property. See {@link InfoCodeFiscalTexts.subcodeNumber}.
   * @param connectorGroupNumber Key property. See {@link InfoCodeFiscalTexts.connectorGroupNumber}.
   * @returns A request builder for creating requests that delete an entity of type `InfoCodeFiscalTexts`.
   */
  delete(
    dataAreaId: string,
    infoCodeNumber: string,
    subcodeNumber: string,
    connectorGroupNumber: string
  ): DeleteRequestBuilder<InfoCodeFiscalTexts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InfoCodeFiscalTexts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InfoCodeFiscalTexts` by taking the entity as a parameter.
   */
  delete(
    entity: InfoCodeFiscalTexts<T>
  ): DeleteRequestBuilder<InfoCodeFiscalTexts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    infoCodeNumber?: string,
    subcodeNumber?: string,
    connectorGroupNumber?: string
  ): DeleteRequestBuilder<InfoCodeFiscalTexts<T>, T> {
    return new DeleteRequestBuilder<InfoCodeFiscalTexts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InfoCodeFiscalTexts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InfoCodeNumber: infoCodeNumber!,
            SubcodeNumber: subcodeNumber!,
            ConnectorGroupNumber: connectorGroupNumber!
          }
    );
  }
}
