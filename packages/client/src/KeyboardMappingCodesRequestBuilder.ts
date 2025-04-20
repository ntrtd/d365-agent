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
import { KeyboardMappingCodes } from './KeyboardMappingCodes';

/**
 * Request builder class for operations supported on the {@link KeyboardMappingCodes} entity.
 */
export class KeyboardMappingCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<KeyboardMappingCodes<T>, T> {
  /**
   * Returns a request builder for querying all `KeyboardMappingCodes` entities.
   * @returns A request builder for creating requests to retrieve all `KeyboardMappingCodes` entities.
   */
  getAll(): GetAllRequestBuilder<KeyboardMappingCodes<T>, T> {
    return new GetAllRequestBuilder<KeyboardMappingCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `KeyboardMappingCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `KeyboardMappingCodes`.
   */
  create(
    entity: KeyboardMappingCodes<T>
  ): CreateRequestBuilder<KeyboardMappingCodes<T>, T> {
    return new CreateRequestBuilder<KeyboardMappingCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `KeyboardMappingCodes` entity based on its keys.
   * @param keyboardMappingGroup Key property. See {@link KeyboardMappingCodes.keyboardMappingGroup}.
   * @param asciiValue Key property. See {@link KeyboardMappingCodes.asciiValue}.
   * @returns A request builder for creating requests to retrieve one `KeyboardMappingCodes` entity based on its keys.
   */
  getByKey(
    keyboardMappingGroup: DeserializedType<T, 'Edm.String'>,
    asciiValue: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<KeyboardMappingCodes<T>, T> {
    return new GetByKeyRequestBuilder<KeyboardMappingCodes<T>, T>(
      this.entityApi,
      {
        KeyboardMappingGroup: keyboardMappingGroup,
        AsciiValue: asciiValue
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `KeyboardMappingCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `KeyboardMappingCodes`.
   */
  update(
    entity: KeyboardMappingCodes<T>
  ): UpdateRequestBuilder<KeyboardMappingCodes<T>, T> {
    return new UpdateRequestBuilder<KeyboardMappingCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `KeyboardMappingCodes`.
   * @param keyboardMappingGroup Key property. See {@link KeyboardMappingCodes.keyboardMappingGroup}.
   * @param asciiValue Key property. See {@link KeyboardMappingCodes.asciiValue}.
   * @returns A request builder for creating requests that delete an entity of type `KeyboardMappingCodes`.
   */
  delete(
    keyboardMappingGroup: string,
    asciiValue: number
  ): DeleteRequestBuilder<KeyboardMappingCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `KeyboardMappingCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `KeyboardMappingCodes` by taking the entity as a parameter.
   */
  delete(
    entity: KeyboardMappingCodes<T>
  ): DeleteRequestBuilder<KeyboardMappingCodes<T>, T>;
  delete(
    keyboardMappingGroupOrEntity: any,
    asciiValue?: number
  ): DeleteRequestBuilder<KeyboardMappingCodes<T>, T> {
    return new DeleteRequestBuilder<KeyboardMappingCodes<T>, T>(
      this.entityApi,
      keyboardMappingGroupOrEntity instanceof KeyboardMappingCodes
        ? keyboardMappingGroupOrEntity
        : {
            KeyboardMappingGroup: keyboardMappingGroupOrEntity!,
            AsciiValue: asciiValue!
          }
    );
  }
}
