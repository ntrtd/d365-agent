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
import { FiscalClassificationCodes } from './FiscalClassificationCodes';

/**
 * Request builder class for operations supported on the {@link FiscalClassificationCodes} entity.
 */
export class FiscalClassificationCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FiscalClassificationCodes<T>, T> {
  /**
   * Returns a request builder for querying all `FiscalClassificationCodes` entities.
   * @returns A request builder for creating requests to retrieve all `FiscalClassificationCodes` entities.
   */
  getAll(): GetAllRequestBuilder<FiscalClassificationCodes<T>, T> {
    return new GetAllRequestBuilder<FiscalClassificationCodes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `FiscalClassificationCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FiscalClassificationCodes`.
   */
  create(
    entity: FiscalClassificationCodes<T>
  ): CreateRequestBuilder<FiscalClassificationCodes<T>, T> {
    return new CreateRequestBuilder<FiscalClassificationCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FiscalClassificationCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link FiscalClassificationCodes.dataAreaId}.
   * @param fiscalClassificationCode Key property. See {@link FiscalClassificationCodes.fiscalClassificationCode}.
   * @returns A request builder for creating requests to retrieve one `FiscalClassificationCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    fiscalClassificationCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FiscalClassificationCodes<T>, T> {
    return new GetByKeyRequestBuilder<FiscalClassificationCodes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        FiscalClassificationCode: fiscalClassificationCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FiscalClassificationCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FiscalClassificationCodes`.
   */
  update(
    entity: FiscalClassificationCodes<T>
  ): UpdateRequestBuilder<FiscalClassificationCodes<T>, T> {
    return new UpdateRequestBuilder<FiscalClassificationCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FiscalClassificationCodes`.
   * @param dataAreaId Key property. See {@link FiscalClassificationCodes.dataAreaId}.
   * @param fiscalClassificationCode Key property. See {@link FiscalClassificationCodes.fiscalClassificationCode}.
   * @returns A request builder for creating requests that delete an entity of type `FiscalClassificationCodes`.
   */
  delete(
    dataAreaId: string,
    fiscalClassificationCode: string
  ): DeleteRequestBuilder<FiscalClassificationCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FiscalClassificationCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FiscalClassificationCodes` by taking the entity as a parameter.
   */
  delete(
    entity: FiscalClassificationCodes<T>
  ): DeleteRequestBuilder<FiscalClassificationCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    fiscalClassificationCode?: string
  ): DeleteRequestBuilder<FiscalClassificationCodes<T>, T> {
    return new DeleteRequestBuilder<FiscalClassificationCodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof FiscalClassificationCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FiscalClassificationCode: fiscalClassificationCode!
          }
    );
  }
}
