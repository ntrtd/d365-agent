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
import { RetailPackageLines } from './RetailPackageLines';

/**
 * Request builder class for operations supported on the {@link RetailPackageLines} entity.
 */
export class RetailPackageLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailPackageLines<T>, T> {
  /**
   * Returns a request builder for querying all `RetailPackageLines` entities.
   * @returns A request builder for creating requests to retrieve all `RetailPackageLines` entities.
   */
  getAll(): GetAllRequestBuilder<RetailPackageLines<T>, T> {
    return new GetAllRequestBuilder<RetailPackageLines<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailPackageLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailPackageLines`.
   */
  create(
    entity: RetailPackageLines<T>
  ): CreateRequestBuilder<RetailPackageLines<T>, T> {
    return new CreateRequestBuilder<RetailPackageLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailPackageLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailPackageLines.dataAreaId}.
   * @param packageId Key property. See {@link RetailPackageLines.packageId}.
   * @param itemId Key property. See {@link RetailPackageLines.itemId}.
   * @param purchaseUnit Key property. See {@link RetailPackageLines.purchaseUnit}.
   * @param color Key property. See {@link RetailPackageLines.color}.
   * @param size Key property. See {@link RetailPackageLines.size}.
   * @param style Key property. See {@link RetailPackageLines.style}.
   * @param configId Key property. See {@link RetailPackageLines.configId}.
   * @returns A request builder for creating requests to retrieve one `RetailPackageLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    packageId: DeserializedType<T, 'Edm.String'>,
    itemId: DeserializedType<T, 'Edm.String'>,
    purchaseUnit: DeserializedType<T, 'Edm.String'>,
    color: DeserializedType<T, 'Edm.String'>,
    size: DeserializedType<T, 'Edm.String'>,
    style: DeserializedType<T, 'Edm.String'>,
    configId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailPackageLines<T>, T> {
    return new GetByKeyRequestBuilder<RetailPackageLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PackageId: packageId,
        ItemId: itemId,
        PurchaseUnit: purchaseUnit,
        Color: color,
        Size: size,
        Style: style,
        ConfigId: configId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailPackageLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailPackageLines`.
   */
  update(
    entity: RetailPackageLines<T>
  ): UpdateRequestBuilder<RetailPackageLines<T>, T> {
    return new UpdateRequestBuilder<RetailPackageLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailPackageLines`.
   * @param dataAreaId Key property. See {@link RetailPackageLines.dataAreaId}.
   * @param packageId Key property. See {@link RetailPackageLines.packageId}.
   * @param itemId Key property. See {@link RetailPackageLines.itemId}.
   * @param purchaseUnit Key property. See {@link RetailPackageLines.purchaseUnit}.
   * @param color Key property. See {@link RetailPackageLines.color}.
   * @param size Key property. See {@link RetailPackageLines.size}.
   * @param style Key property. See {@link RetailPackageLines.style}.
   * @param configId Key property. See {@link RetailPackageLines.configId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailPackageLines`.
   */
  delete(
    dataAreaId: string,
    packageId: string,
    itemId: string,
    purchaseUnit: string,
    color: string,
    size: string,
    style: string,
    configId: string
  ): DeleteRequestBuilder<RetailPackageLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailPackageLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailPackageLines` by taking the entity as a parameter.
   */
  delete(
    entity: RetailPackageLines<T>
  ): DeleteRequestBuilder<RetailPackageLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    packageId?: string,
    itemId?: string,
    purchaseUnit?: string,
    color?: string,
    size?: string,
    style?: string,
    configId?: string
  ): DeleteRequestBuilder<RetailPackageLines<T>, T> {
    return new DeleteRequestBuilder<RetailPackageLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailPackageLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PackageId: packageId!,
            ItemId: itemId!,
            PurchaseUnit: purchaseUnit!,
            Color: color!,
            Size: size!,
            Style: style!,
            ConfigId: configId!
          }
    );
  }
}
