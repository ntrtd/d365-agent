/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjGrantTypesV2 } from './ProjGrantTypesV2';
import { ProjGrantTypesV2RequestBuilder } from './ProjGrantTypesV2RequestBuilder';
import { NoYes } from './NoYes';
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
  OrderableEdmTypeField,
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class ProjGrantTypesV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProjGrantTypesV2<DeSerializersT>, DeSerializersT>
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
  ): ProjGrantTypesV2Api<DeSerializersT> {
    return new ProjGrantTypesV2Api(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProjGrantTypesV2;

  requestBuilder(): ProjGrantTypesV2RequestBuilder<DeSerializersT> {
    return new ProjGrantTypesV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProjGrantTypesV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProjGrantTypesV2<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ProjGrantTypesV2<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ProjGrantTypesV2, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProjGrantTypesV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProjGrantTypesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GRANT_TYPE: OrderableEdmTypeField<
      ProjGrantTypesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ProjGrantTypesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MANAGER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      ProjGrantTypesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PERSONNEL_NUMBER: OrderableEdmTypeField<
      ProjGrantTypesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORGANIZATION_NUMBER: OrderableEdmTypeField<
      ProjGrantTypesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_GRANTOR: EnumField<
      ProjGrantTypesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STATE_MANDATE: EnumField<
      ProjGrantTypesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXCLUDE_FROM_SEFA: EnumField<
      ProjGrantTypesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FEDERAL_MANDATE: EnumField<
      ProjGrantTypesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProjGrantTypesV2<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link grantType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GRANT_TYPE: fieldBuilder.buildEdmTypeField(
          'GrantType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link managerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANAGER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ManagerPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contactPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ContactPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link organizationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'OrganizationNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link subGrantor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_GRANTOR: fieldBuilder.buildEnumField('SubGrantor', NoYes, true),
        /**
         * Static representation of the {@link stateMandate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE_MANDATE: fieldBuilder.buildEnumField('StateMandate', NoYes, true),
        /**
         * Static representation of the {@link excludeFromSefa} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCLUDE_FROM_SEFA: fieldBuilder.buildEnumField(
          'ExcludeFromSEFA',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link federalMandate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FEDERAL_MANDATE: fieldBuilder.buildEnumField(
          'FederalMandate',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProjGrantTypesV2)
      };
    }

    return this._schema;
  }
}
