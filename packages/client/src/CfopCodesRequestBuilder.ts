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
import { CfopCodes } from './CfopCodes';

/**
 * Request builder class for operations supported on the {@link CfopCodes} entity.
 */
export class CfopCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CfopCodes<T>, T> {
  /**
   * Returns a request builder for querying all `CfopCodes` entities.
   * @returns A request builder for creating requests to retrieve all `CfopCodes` entities.
   */
  getAll(): GetAllRequestBuilder<CfopCodes<T>, T> {
    return new GetAllRequestBuilder<CfopCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CfopCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CfopCodes`.
   */
  create(entity: CfopCodes<T>): CreateRequestBuilder<CfopCodes<T>, T> {
    return new CreateRequestBuilder<CfopCodes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CfopCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link CfopCodes.dataAreaId}.
   * @param cfop Key property. See {@link CfopCodes.cfop}.
   * @returns A request builder for creating requests to retrieve one `CfopCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    cfop: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CfopCodes<T>, T> {
    return new GetByKeyRequestBuilder<CfopCodes<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      CFOP: cfop
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CfopCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CfopCodes`.
   */
  update(entity: CfopCodes<T>): UpdateRequestBuilder<CfopCodes<T>, T> {
    return new UpdateRequestBuilder<CfopCodes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CfopCodes`.
   * @param dataAreaId Key property. See {@link CfopCodes.dataAreaId}.
   * @param cfop Key property. See {@link CfopCodes.cfop}.
   * @returns A request builder for creating requests that delete an entity of type `CfopCodes`.
   */
  delete(
    dataAreaId: string,
    cfop: string
  ): DeleteRequestBuilder<CfopCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CfopCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CfopCodes` by taking the entity as a parameter.
   */
  delete(entity: CfopCodes<T>): DeleteRequestBuilder<CfopCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    cfop?: string
  ): DeleteRequestBuilder<CfopCodes<T>, T> {
    return new DeleteRequestBuilder<CfopCodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CfopCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CFOP: cfop!
          }
    );
  }
}
