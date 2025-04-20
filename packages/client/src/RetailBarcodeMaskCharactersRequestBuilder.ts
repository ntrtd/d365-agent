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
import { RetailBarcodeMaskCharacters } from './RetailBarcodeMaskCharacters';
import { RetailBarcodeMaskCharacterTypeBase } from './RetailBarcodeMaskCharacterTypeBase';

/**
 * Request builder class for operations supported on the {@link RetailBarcodeMaskCharacters} entity.
 */
export class RetailBarcodeMaskCharactersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailBarcodeMaskCharacters<T>, T> {
  /**
   * Returns a request builder for querying all `RetailBarcodeMaskCharacters` entities.
   * @returns A request builder for creating requests to retrieve all `RetailBarcodeMaskCharacters` entities.
   */
  getAll(): GetAllRequestBuilder<RetailBarcodeMaskCharacters<T>, T> {
    return new GetAllRequestBuilder<RetailBarcodeMaskCharacters<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailBarcodeMaskCharacters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailBarcodeMaskCharacters`.
   */
  create(
    entity: RetailBarcodeMaskCharacters<T>
  ): CreateRequestBuilder<RetailBarcodeMaskCharacters<T>, T> {
    return new CreateRequestBuilder<RetailBarcodeMaskCharacters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailBarcodeMaskCharacters` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailBarcodeMaskCharacters.dataAreaId}.
   * @param characterType Key property. See {@link RetailBarcodeMaskCharacters.characterType}.
   * @returns A request builder for creating requests to retrieve one `RetailBarcodeMaskCharacters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    characterType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RetailBarcodeMaskCharacterTypeBase'
    >
  ): GetByKeyRequestBuilder<RetailBarcodeMaskCharacters<T>, T> {
    return new GetByKeyRequestBuilder<RetailBarcodeMaskCharacters<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CharacterType: characterType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailBarcodeMaskCharacters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailBarcodeMaskCharacters`.
   */
  update(
    entity: RetailBarcodeMaskCharacters<T>
  ): UpdateRequestBuilder<RetailBarcodeMaskCharacters<T>, T> {
    return new UpdateRequestBuilder<RetailBarcodeMaskCharacters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailBarcodeMaskCharacters`.
   * @param dataAreaId Key property. See {@link RetailBarcodeMaskCharacters.dataAreaId}.
   * @param characterType Key property. See {@link RetailBarcodeMaskCharacters.characterType}.
   * @returns A request builder for creating requests that delete an entity of type `RetailBarcodeMaskCharacters`.
   */
  delete(
    dataAreaId: string,
    characterType: RetailBarcodeMaskCharacterTypeBase
  ): DeleteRequestBuilder<RetailBarcodeMaskCharacters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailBarcodeMaskCharacters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailBarcodeMaskCharacters` by taking the entity as a parameter.
   */
  delete(
    entity: RetailBarcodeMaskCharacters<T>
  ): DeleteRequestBuilder<RetailBarcodeMaskCharacters<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    characterType?: RetailBarcodeMaskCharacterTypeBase
  ): DeleteRequestBuilder<RetailBarcodeMaskCharacters<T>, T> {
    return new DeleteRequestBuilder<RetailBarcodeMaskCharacters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailBarcodeMaskCharacters
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CharacterType: characterType!
          }
    );
  }
}
