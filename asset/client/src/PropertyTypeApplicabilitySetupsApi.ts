/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PropertyTypeApplicabilitySetups } from './PropertyTypeApplicabilitySetups';
import { PropertyTypeApplicabilitySetupsRequestBuilder } from './PropertyTypeApplicabilitySetupsRequestBuilder';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class PropertyTypeApplicabilitySetupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PropertyTypeApplicabilitySetups<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): PropertyTypeApplicabilitySetupsApi<DeSerializersT> {
    return new PropertyTypeApplicabilitySetupsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PropertyTypeApplicabilitySetups;

  requestBuilder(): PropertyTypeApplicabilitySetupsRequestBuilder<DeSerializersT> {
    return new PropertyTypeApplicabilitySetupsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    PropertyTypeApplicabilitySetups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PropertyTypeApplicabilitySetups<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PropertyTypeApplicabilitySetups<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof PropertyTypeApplicabilitySetups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PropertyTypeApplicabilitySetups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PROPERTY_TYPE: OrderableEdmTypeField<
      PropertyTypeApplicabilitySetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TABLE_NAME: OrderableEdmTypeField<
      PropertyTypeApplicabilitySetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<PropertyTypeApplicabilitySetups<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link propertyType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_TYPE: fieldBuilder.buildEdmTypeField(
          'PropertyType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link tableName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TABLE_NAME: fieldBuilder.buildEdmTypeField(
          'TableName',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PropertyTypeApplicabilitySetups)
      };
    }

    return this._schema;
  }
}
