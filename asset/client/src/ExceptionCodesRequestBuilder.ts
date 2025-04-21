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
import { ExceptionCodes } from './ExceptionCodes';

/**
 * Request builder class for operations supported on the {@link ExceptionCodes} entity.
 */
export class ExceptionCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExceptionCodes<T>, T> {
  /**
   * Returns a request builder for querying all `ExceptionCodes` entities.
   * @returns A request builder for creating requests to retrieve all `ExceptionCodes` entities.
   */
  getAll(): GetAllRequestBuilder<ExceptionCodes<T>, T> {
    return new GetAllRequestBuilder<ExceptionCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ExceptionCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExceptionCodes`.
   */
  create(
    entity: ExceptionCodes<T>
  ): CreateRequestBuilder<ExceptionCodes<T>, T> {
    return new CreateRequestBuilder<ExceptionCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExceptionCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link ExceptionCodes.dataAreaId}.
   * @param fiscalClassificationCode Key property. See {@link ExceptionCodes.fiscalClassificationCode}.
   * @param exceptionCode Key property. See {@link ExceptionCodes.exceptionCode}.
   * @returns A request builder for creating requests to retrieve one `ExceptionCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    fiscalClassificationCode: DeserializedType<T, 'Edm.String'>,
    exceptionCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ExceptionCodes<T>, T> {
    return new GetByKeyRequestBuilder<ExceptionCodes<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      FiscalClassificationCode: fiscalClassificationCode,
      ExceptionCode: exceptionCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ExceptionCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExceptionCodes`.
   */
  update(
    entity: ExceptionCodes<T>
  ): UpdateRequestBuilder<ExceptionCodes<T>, T> {
    return new UpdateRequestBuilder<ExceptionCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExceptionCodes`.
   * @param dataAreaId Key property. See {@link ExceptionCodes.dataAreaId}.
   * @param fiscalClassificationCode Key property. See {@link ExceptionCodes.fiscalClassificationCode}.
   * @param exceptionCode Key property. See {@link ExceptionCodes.exceptionCode}.
   * @returns A request builder for creating requests that delete an entity of type `ExceptionCodes`.
   */
  delete(
    dataAreaId: string,
    fiscalClassificationCode: string,
    exceptionCode: string
  ): DeleteRequestBuilder<ExceptionCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExceptionCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExceptionCodes` by taking the entity as a parameter.
   */
  delete(entity: ExceptionCodes<T>): DeleteRequestBuilder<ExceptionCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    fiscalClassificationCode?: string,
    exceptionCode?: string
  ): DeleteRequestBuilder<ExceptionCodes<T>, T> {
    return new DeleteRequestBuilder<ExceptionCodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ExceptionCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FiscalClassificationCode: fiscalClassificationCode!,
            ExceptionCode: exceptionCode!
          }
    );
  }
}
