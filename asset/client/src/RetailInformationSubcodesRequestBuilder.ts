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
import { RetailInformationSubcodes } from './RetailInformationSubcodes';

/**
 * Request builder class for operations supported on the {@link RetailInformationSubcodes} entity.
 */
export class RetailInformationSubcodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailInformationSubcodes<T>, T> {
  /**
   * Returns a request builder for querying all `RetailInformationSubcodes` entities.
   * @returns A request builder for creating requests to retrieve all `RetailInformationSubcodes` entities.
   */
  getAll(): GetAllRequestBuilder<RetailInformationSubcodes<T>, T> {
    return new GetAllRequestBuilder<RetailInformationSubcodes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailInformationSubcodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailInformationSubcodes`.
   */
  create(
    entity: RetailInformationSubcodes<T>
  ): CreateRequestBuilder<RetailInformationSubcodes<T>, T> {
    return new CreateRequestBuilder<RetailInformationSubcodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailInformationSubcodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailInformationSubcodes.dataAreaId}.
   * @param infocodeId Key property. See {@link RetailInformationSubcodes.infocodeId}.
   * @param subcodeId Key property. See {@link RetailInformationSubcodes.subcodeId}.
   * @returns A request builder for creating requests to retrieve one `RetailInformationSubcodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    infocodeId: DeserializedType<T, 'Edm.String'>,
    subcodeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailInformationSubcodes<T>, T> {
    return new GetByKeyRequestBuilder<RetailInformationSubcodes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        InfocodeId: infocodeId,
        SubcodeId: subcodeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailInformationSubcodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailInformationSubcodes`.
   */
  update(
    entity: RetailInformationSubcodes<T>
  ): UpdateRequestBuilder<RetailInformationSubcodes<T>, T> {
    return new UpdateRequestBuilder<RetailInformationSubcodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailInformationSubcodes`.
   * @param dataAreaId Key property. See {@link RetailInformationSubcodes.dataAreaId}.
   * @param infocodeId Key property. See {@link RetailInformationSubcodes.infocodeId}.
   * @param subcodeId Key property. See {@link RetailInformationSubcodes.subcodeId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailInformationSubcodes`.
   */
  delete(
    dataAreaId: string,
    infocodeId: string,
    subcodeId: string
  ): DeleteRequestBuilder<RetailInformationSubcodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailInformationSubcodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailInformationSubcodes` by taking the entity as a parameter.
   */
  delete(
    entity: RetailInformationSubcodes<T>
  ): DeleteRequestBuilder<RetailInformationSubcodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    infocodeId?: string,
    subcodeId?: string
  ): DeleteRequestBuilder<RetailInformationSubcodes<T>, T> {
    return new DeleteRequestBuilder<RetailInformationSubcodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailInformationSubcodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InfocodeId: infocodeId!,
            SubcodeId: subcodeId!
          }
    );
  }
}
