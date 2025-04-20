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
import { EfDocReturnCodes } from './EfDocReturnCodes';
import { EfDocMessageTypeBr } from './EfDocMessageTypeBr';

/**
 * Request builder class for operations supported on the {@link EfDocReturnCodes} entity.
 */
export class EfDocReturnCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EfDocReturnCodes<T>, T> {
  /**
   * Returns a request builder for querying all `EfDocReturnCodes` entities.
   * @returns A request builder for creating requests to retrieve all `EfDocReturnCodes` entities.
   */
  getAll(): GetAllRequestBuilder<EfDocReturnCodes<T>, T> {
    return new GetAllRequestBuilder<EfDocReturnCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EfDocReturnCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EfDocReturnCodes`.
   */
  create(
    entity: EfDocReturnCodes<T>
  ): CreateRequestBuilder<EfDocReturnCodes<T>, T> {
    return new CreateRequestBuilder<EfDocReturnCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EfDocReturnCodes` entity based on its keys.
   * @param returnCode Key property. See {@link EfDocReturnCodes.returnCode}.
   * @param messageType Key property. See {@link EfDocReturnCodes.messageType}.
   * @returns A request builder for creating requests to retrieve one `EfDocReturnCodes` entity based on its keys.
   */
  getByKey(
    returnCode: DeserializedType<T, 'Edm.String'>,
    messageType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.EFDocMessageType_BR'
    >
  ): GetByKeyRequestBuilder<EfDocReturnCodes<T>, T> {
    return new GetByKeyRequestBuilder<EfDocReturnCodes<T>, T>(this.entityApi, {
      ReturnCode: returnCode,
      MessageType: messageType
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EfDocReturnCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EfDocReturnCodes`.
   */
  update(
    entity: EfDocReturnCodes<T>
  ): UpdateRequestBuilder<EfDocReturnCodes<T>, T> {
    return new UpdateRequestBuilder<EfDocReturnCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EfDocReturnCodes`.
   * @param returnCode Key property. See {@link EfDocReturnCodes.returnCode}.
   * @param messageType Key property. See {@link EfDocReturnCodes.messageType}.
   * @returns A request builder for creating requests that delete an entity of type `EfDocReturnCodes`.
   */
  delete(
    returnCode: string,
    messageType: EfDocMessageTypeBr
  ): DeleteRequestBuilder<EfDocReturnCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EfDocReturnCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EfDocReturnCodes` by taking the entity as a parameter.
   */
  delete(
    entity: EfDocReturnCodes<T>
  ): DeleteRequestBuilder<EfDocReturnCodes<T>, T>;
  delete(
    returnCodeOrEntity: any,
    messageType?: EfDocMessageTypeBr
  ): DeleteRequestBuilder<EfDocReturnCodes<T>, T> {
    return new DeleteRequestBuilder<EfDocReturnCodes<T>, T>(
      this.entityApi,
      returnCodeOrEntity instanceof EfDocReturnCodes
        ? returnCodeOrEntity
        : {
            ReturnCode: returnCodeOrEntity!,
            MessageType: messageType!
          }
    );
  }
}
