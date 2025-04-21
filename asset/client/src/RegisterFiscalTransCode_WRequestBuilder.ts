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
import { RegisterFiscalTransCode_W } from './RegisterFiscalTransCode_W';

/**
 * Request builder class for operations supported on the {@link RegisterFiscalTransCode_W} entity.
 */
export class RegisterFiscalTransCode_WRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RegisterFiscalTransCode_W<T>, T> {
  /**
   * Returns a request builder for querying all `RegisterFiscalTransCode_W` entities.
   * @returns A request builder for creating requests to retrieve all `RegisterFiscalTransCode_W` entities.
   */
  getAll(): GetAllRequestBuilder<RegisterFiscalTransCode_W<T>, T> {
    return new GetAllRequestBuilder<RegisterFiscalTransCode_W<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RegisterFiscalTransCode_W` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RegisterFiscalTransCode_W`.
   */
  create(
    entity: RegisterFiscalTransCode_W<T>
  ): CreateRequestBuilder<RegisterFiscalTransCode_W<T>, T> {
    return new CreateRequestBuilder<RegisterFiscalTransCode_W<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RegisterFiscalTransCode_W` entity based on its keys.
   * @param dataAreaId Key property. See {@link RegisterFiscalTransCode_W.dataAreaId}.
   * @param voucher Key property. See {@link RegisterFiscalTransCode_W.voucher}.
   * @param label Key property. See {@link RegisterFiscalTransCode_W.label}.
   * @param name Key property. See {@link RegisterFiscalTransCode_W.name}.
   * @param value Key property. See {@link RegisterFiscalTransCode_W.value}.
   * @returns A request builder for creating requests to retrieve one `RegisterFiscalTransCode_W` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    voucher: DeserializedType<T, 'Edm.String'>,
    label: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>,
    value: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RegisterFiscalTransCode_W<T>, T> {
    return new GetByKeyRequestBuilder<RegisterFiscalTransCode_W<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Voucher: voucher,
        Label: label,
        Name: name,
        Value: value
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RegisterFiscalTransCode_W`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RegisterFiscalTransCode_W`.
   */
  update(
    entity: RegisterFiscalTransCode_W<T>
  ): UpdateRequestBuilder<RegisterFiscalTransCode_W<T>, T> {
    return new UpdateRequestBuilder<RegisterFiscalTransCode_W<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RegisterFiscalTransCode_W`.
   * @param dataAreaId Key property. See {@link RegisterFiscalTransCode_W.dataAreaId}.
   * @param voucher Key property. See {@link RegisterFiscalTransCode_W.voucher}.
   * @param label Key property. See {@link RegisterFiscalTransCode_W.label}.
   * @param name Key property. See {@link RegisterFiscalTransCode_W.name}.
   * @param value Key property. See {@link RegisterFiscalTransCode_W.value}.
   * @returns A request builder for creating requests that delete an entity of type `RegisterFiscalTransCode_W`.
   */
  delete(
    dataAreaId: string,
    voucher: string,
    label: string,
    name: string,
    value: string
  ): DeleteRequestBuilder<RegisterFiscalTransCode_W<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RegisterFiscalTransCode_W`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RegisterFiscalTransCode_W` by taking the entity as a parameter.
   */
  delete(
    entity: RegisterFiscalTransCode_W<T>
  ): DeleteRequestBuilder<RegisterFiscalTransCode_W<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    voucher?: string,
    label?: string,
    name?: string,
    value?: string
  ): DeleteRequestBuilder<RegisterFiscalTransCode_W<T>, T> {
    return new DeleteRequestBuilder<RegisterFiscalTransCode_W<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RegisterFiscalTransCode_W
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Voucher: voucher!,
            Label: label!,
            Name: name!,
            Value: value!
          }
    );
  }
}
