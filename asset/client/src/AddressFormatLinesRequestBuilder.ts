/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { AddressFormatLines } from './AddressFormatLines';

/**
 * Request builder class for operations supported on the {@link AddressFormatLines} entity.
 */
export class AddressFormatLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AddressFormatLines<T>, T> {
  /**
   * Returns a request builder for querying all `AddressFormatLines` entities.
   * @returns A request builder for creating requests to retrieve all `AddressFormatLines` entities.
   */
  getAll(): GetAllRequestBuilder<AddressFormatLines<T>, T> {
    return new GetAllRequestBuilder<AddressFormatLines<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AddressFormatLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AddressFormatLines`.
   */
  create(
    entity: AddressFormatLines<T>
  ): CreateRequestBuilder<AddressFormatLines<T>, T> {
    return new CreateRequestBuilder<AddressFormatLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AddressFormatLines` entity based on its keys.
   * @param addressFormat Key property. See {@link AddressFormatLines.addressFormat}.
   * @param lineNumber Key property. See {@link AddressFormatLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `AddressFormatLines` entity based on its keys.
   */
  getByKey(
    addressFormat: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<AddressFormatLines<T>, T> {
    return new GetByKeyRequestBuilder<AddressFormatLines<T>, T>(
      this.entityApi,
      {
        AddressFormat: addressFormat,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AddressFormatLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AddressFormatLines`.
   */
  update(
    entity: AddressFormatLines<T>
  ): UpdateRequestBuilder<AddressFormatLines<T>, T> {
    return new UpdateRequestBuilder<AddressFormatLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AddressFormatLines`.
   * @param addressFormat Key property. See {@link AddressFormatLines.addressFormat}.
   * @param lineNumber Key property. See {@link AddressFormatLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `AddressFormatLines`.
   */
  delete(
    addressFormat: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<AddressFormatLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AddressFormatLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AddressFormatLines` by taking the entity as a parameter.
   */
  delete(
    entity: AddressFormatLines<T>
  ): DeleteRequestBuilder<AddressFormatLines<T>, T>;
  delete(
    addressFormatOrEntity: any,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<AddressFormatLines<T>, T> {
    return new DeleteRequestBuilder<AddressFormatLines<T>, T>(
      this.entityApi,
      addressFormatOrEntity instanceof AddressFormatLines
        ? addressFormatOrEntity
        : {
            AddressFormat: addressFormatOrEntity!,
            LineNumber: lineNumber!
          }
    );
  }
}
