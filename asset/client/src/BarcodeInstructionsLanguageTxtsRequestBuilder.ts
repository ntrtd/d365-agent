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
import { BarcodeInstructionsLanguageTxts } from './BarcodeInstructionsLanguageTxts';

/**
 * Request builder class for operations supported on the {@link BarcodeInstructionsLanguageTxts} entity.
 */
export class BarcodeInstructionsLanguageTxtsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BarcodeInstructionsLanguageTxts<T>, T> {
  /**
   * Returns a request builder for querying all `BarcodeInstructionsLanguageTxts` entities.
   * @returns A request builder for creating requests to retrieve all `BarcodeInstructionsLanguageTxts` entities.
   */
  getAll(): GetAllRequestBuilder<BarcodeInstructionsLanguageTxts<T>, T> {
    return new GetAllRequestBuilder<BarcodeInstructionsLanguageTxts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BarcodeInstructionsLanguageTxts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BarcodeInstructionsLanguageTxts`.
   */
  create(
    entity: BarcodeInstructionsLanguageTxts<T>
  ): CreateRequestBuilder<BarcodeInstructionsLanguageTxts<T>, T> {
    return new CreateRequestBuilder<BarcodeInstructionsLanguageTxts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BarcodeInstructionsLanguageTxts` entity based on its keys.
   * @param dataAreaId Key property. See {@link BarcodeInstructionsLanguageTxts.dataAreaId}.
   * @param language Key property. See {@link BarcodeInstructionsLanguageTxts.language}.
   * @returns A request builder for creating requests to retrieve one `BarcodeInstructionsLanguageTxts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    language: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BarcodeInstructionsLanguageTxts<T>, T> {
    return new GetByKeyRequestBuilder<BarcodeInstructionsLanguageTxts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Language: language
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BarcodeInstructionsLanguageTxts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BarcodeInstructionsLanguageTxts`.
   */
  update(
    entity: BarcodeInstructionsLanguageTxts<T>
  ): UpdateRequestBuilder<BarcodeInstructionsLanguageTxts<T>, T> {
    return new UpdateRequestBuilder<BarcodeInstructionsLanguageTxts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BarcodeInstructionsLanguageTxts`.
   * @param dataAreaId Key property. See {@link BarcodeInstructionsLanguageTxts.dataAreaId}.
   * @param language Key property. See {@link BarcodeInstructionsLanguageTxts.language}.
   * @returns A request builder for creating requests that delete an entity of type `BarcodeInstructionsLanguageTxts`.
   */
  delete(
    dataAreaId: string,
    language: string
  ): DeleteRequestBuilder<BarcodeInstructionsLanguageTxts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BarcodeInstructionsLanguageTxts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BarcodeInstructionsLanguageTxts` by taking the entity as a parameter.
   */
  delete(
    entity: BarcodeInstructionsLanguageTxts<T>
  ): DeleteRequestBuilder<BarcodeInstructionsLanguageTxts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    language?: string
  ): DeleteRequestBuilder<BarcodeInstructionsLanguageTxts<T>, T> {
    return new DeleteRequestBuilder<BarcodeInstructionsLanguageTxts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BarcodeInstructionsLanguageTxts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Language: language!
          }
    );
  }
}
