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
import { FormatCodes } from './FormatCodes';
import { PaymentFormatCodeTypeW } from './PaymentFormatCodeTypeW';

/**
 * Request builder class for operations supported on the {@link FormatCodes} entity.
 */
export class FormatCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FormatCodes<T>, T> {
  /**
   * Returns a request builder for querying all `FormatCodes` entities.
   * @returns A request builder for creating requests to retrieve all `FormatCodes` entities.
   */
  getAll(): GetAllRequestBuilder<FormatCodes<T>, T> {
    return new GetAllRequestBuilder<FormatCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FormatCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FormatCodes`.
   */
  create(entity: FormatCodes<T>): CreateRequestBuilder<FormatCodes<T>, T> {
    return new CreateRequestBuilder<FormatCodes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `FormatCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link FormatCodes.dataAreaId}.
   * @param code Key property. See {@link FormatCodes.code}.
   * @param type Key property. See {@link FormatCodes.type}.
   * @returns A request builder for creating requests to retrieve one `FormatCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    code: DeserializedType<T, 'Edm.String'>,
    type: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.PaymentFormatCodeType_W'
    >
  ): GetByKeyRequestBuilder<FormatCodes<T>, T> {
    return new GetByKeyRequestBuilder<FormatCodes<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Code: code,
      Type: type
    });
  }

  /**
   * Returns a request builder for updating an entity of type `FormatCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FormatCodes`.
   */
  update(entity: FormatCodes<T>): UpdateRequestBuilder<FormatCodes<T>, T> {
    return new UpdateRequestBuilder<FormatCodes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `FormatCodes`.
   * @param dataAreaId Key property. See {@link FormatCodes.dataAreaId}.
   * @param code Key property. See {@link FormatCodes.code}.
   * @param type Key property. See {@link FormatCodes.type}.
   * @returns A request builder for creating requests that delete an entity of type `FormatCodes`.
   */
  delete(
    dataAreaId: string,
    code: string,
    type: PaymentFormatCodeTypeW
  ): DeleteRequestBuilder<FormatCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FormatCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FormatCodes` by taking the entity as a parameter.
   */
  delete(entity: FormatCodes<T>): DeleteRequestBuilder<FormatCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    code?: string,
    type?: PaymentFormatCodeTypeW
  ): DeleteRequestBuilder<FormatCodes<T>, T> {
    return new DeleteRequestBuilder<FormatCodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof FormatCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Code: code!,
            Type: type!
          }
    );
  }
}
