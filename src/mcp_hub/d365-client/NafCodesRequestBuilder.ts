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
import { NafCodes } from './NafCodes';

/**
 * Request builder class for operations supported on the {@link NafCodes} entity.
 */
export class NafCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<NafCodes<T>, T> {
  /**
   * Returns a request builder for querying all `NafCodes` entities.
   * @returns A request builder for creating requests to retrieve all `NafCodes` entities.
   */
  getAll(): GetAllRequestBuilder<NafCodes<T>, T> {
    return new GetAllRequestBuilder<NafCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `NafCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `NafCodes`.
   */
  create(entity: NafCodes<T>): CreateRequestBuilder<NafCodes<T>, T> {
    return new CreateRequestBuilder<NafCodes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `NafCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link NafCodes.dataAreaId}.
   * @param nafCode Key property. See {@link NafCodes.nafCode}.
   * @returns A request builder for creating requests to retrieve one `NafCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    nafCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<NafCodes<T>, T> {
    return new GetByKeyRequestBuilder<NafCodes<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      NAFCode: nafCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `NafCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `NafCodes`.
   */
  update(entity: NafCodes<T>): UpdateRequestBuilder<NafCodes<T>, T> {
    return new UpdateRequestBuilder<NafCodes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `NafCodes`.
   * @param dataAreaId Key property. See {@link NafCodes.dataAreaId}.
   * @param nafCode Key property. See {@link NafCodes.nafCode}.
   * @returns A request builder for creating requests that delete an entity of type `NafCodes`.
   */
  delete(
    dataAreaId: string,
    nafCode: string
  ): DeleteRequestBuilder<NafCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `NafCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `NafCodes` by taking the entity as a parameter.
   */
  delete(entity: NafCodes<T>): DeleteRequestBuilder<NafCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    nafCode?: string
  ): DeleteRequestBuilder<NafCodes<T>, T> {
    return new DeleteRequestBuilder<NafCodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof NafCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            NAFCode: nafCode!
          }
    );
  }
}
