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
import { EngineeringProductCategoryNomenclatures } from './EngineeringProductCategoryNomenclatures';
import { EcoResNomenclatureRole } from './EcoResNomenclatureRole';

/**
 * Request builder class for operations supported on the {@link EngineeringProductCategoryNomenclatures} entity.
 */
export class EngineeringProductCategoryNomenclaturesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EngineeringProductCategoryNomenclatures<T>, T> {
  /**
   * Returns a request builder for querying all `EngineeringProductCategoryNomenclatures` entities.
   * @returns A request builder for creating requests to retrieve all `EngineeringProductCategoryNomenclatures` entities.
   */
  getAll(): GetAllRequestBuilder<
    EngineeringProductCategoryNomenclatures<T>,
    T
  > {
    return new GetAllRequestBuilder<
      EngineeringProductCategoryNomenclatures<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EngineeringProductCategoryNomenclatures` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EngineeringProductCategoryNomenclatures`.
   */
  create(
    entity: EngineeringProductCategoryNomenclatures<T>
  ): CreateRequestBuilder<EngineeringProductCategoryNomenclatures<T>, T> {
    return new CreateRequestBuilder<
      EngineeringProductCategoryNomenclatures<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `EngineeringProductCategoryNomenclatures` entity based on its keys.
   * @param engineeringProductCategoryName Key property. See {@link EngineeringProductCategoryNomenclatures.engineeringProductCategoryName}.
   * @param nomenclatureRole Key property. See {@link EngineeringProductCategoryNomenclatures.nomenclatureRole}.
   * @returns A request builder for creating requests to retrieve one `EngineeringProductCategoryNomenclatures` entity based on its keys.
   */
  getByKey(
    engineeringProductCategoryName: DeserializedType<T, 'Edm.String'>,
    nomenclatureRole: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.EcoResNomenclatureRole'
    >
  ): GetByKeyRequestBuilder<EngineeringProductCategoryNomenclatures<T>, T> {
    return new GetByKeyRequestBuilder<
      EngineeringProductCategoryNomenclatures<T>,
      T
    >(this.entityApi, {
      EngineeringProductCategoryName: engineeringProductCategoryName,
      NomenclatureRole: nomenclatureRole
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EngineeringProductCategoryNomenclatures`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EngineeringProductCategoryNomenclatures`.
   */
  update(
    entity: EngineeringProductCategoryNomenclatures<T>
  ): UpdateRequestBuilder<EngineeringProductCategoryNomenclatures<T>, T> {
    return new UpdateRequestBuilder<
      EngineeringProductCategoryNomenclatures<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EngineeringProductCategoryNomenclatures`.
   * @param engineeringProductCategoryName Key property. See {@link EngineeringProductCategoryNomenclatures.engineeringProductCategoryName}.
   * @param nomenclatureRole Key property. See {@link EngineeringProductCategoryNomenclatures.nomenclatureRole}.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringProductCategoryNomenclatures`.
   */
  delete(
    engineeringProductCategoryName: string,
    nomenclatureRole: EcoResNomenclatureRole
  ): DeleteRequestBuilder<EngineeringProductCategoryNomenclatures<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EngineeringProductCategoryNomenclatures`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringProductCategoryNomenclatures` by taking the entity as a parameter.
   */
  delete(
    entity: EngineeringProductCategoryNomenclatures<T>
  ): DeleteRequestBuilder<EngineeringProductCategoryNomenclatures<T>, T>;
  delete(
    engineeringProductCategoryNameOrEntity: any,
    nomenclatureRole?: EcoResNomenclatureRole
  ): DeleteRequestBuilder<EngineeringProductCategoryNomenclatures<T>, T> {
    return new DeleteRequestBuilder<
      EngineeringProductCategoryNomenclatures<T>,
      T
    >(
      this.entityApi,
      engineeringProductCategoryNameOrEntity instanceof
      EngineeringProductCategoryNomenclatures
        ? engineeringProductCategoryNameOrEntity
        : {
            EngineeringProductCategoryName:
              engineeringProductCategoryNameOrEntity!,
            NomenclatureRole: nomenclatureRole!
          }
    );
  }
}
